import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud5ss4a1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud5ss4a1y"/>`,
		"fallback": "bi:list-columns-reverse",
	});
}

export default Component;

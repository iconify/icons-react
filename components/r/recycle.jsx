import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao0de2bax.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao0de2bax"/>`,
		"fallback": "bi:recycle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq195u44k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq195u44k"/>`,
		"fallback": "nonicons:r-16",
	});
}

export default Component;

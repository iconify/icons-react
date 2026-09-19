import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbhh7gc0u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbhh7gc0u"/>`,
		"fallback": "fa7-brands:square-youtube",
	});
}

export default Component;

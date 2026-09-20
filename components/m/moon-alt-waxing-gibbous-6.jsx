import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxr-zjb8o.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxr-zjb8o"/>`,
		"fallback": "wi:moon-alt-waxing-gibbous-6",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfhd0ccqv.css';

const viewBox = {"width":356,"height":400,"top":-15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="colorff4500 svgShape yfhd0ccqv"/>`,
		"fallback": "material-icon-theme:vedic",
	});
}

export default Component;

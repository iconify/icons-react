import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hf4vgvghi.css';
import '../../css/t/t44auyj8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hf4vgvghi"/><path class="t44auyj8d"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-sharp-two-tone",
	});
}

export default Component;

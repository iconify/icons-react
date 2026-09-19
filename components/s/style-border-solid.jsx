import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h100pjbuq.css';
import '../../css/e/eeb6_wvec.css';
import '../../css/k/kigc7uo3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h100pjbuq"><path class="eeb6_wvec"/><path class="kigc7uo3i"/></g>`,
		"fallback": "iconoir:style-border-solid",
	});
}

export default Component;

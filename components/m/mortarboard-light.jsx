import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/faj5369wb.css';
import '../../css/e/edj87zvfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="faj5369wb"/><path class="edj87zvfh"/></g>`,
		"fallback": "lets-icons:mortarboard-light",
	});
}

export default Component;

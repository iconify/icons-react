import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wsl9iwbmu.css';
import '../../css/n/n5nubhbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wsl9iwbmu"/><path class="n5nubhbrj"/></g>`,
		"fallback": "keyline-icons:square-dashed-full-sharp-two-tone",
	});
}

export default Component;

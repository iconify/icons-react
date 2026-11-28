import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkdp5gbui.css';
import '../../css/s/sab8vnk7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kkdp5gbui secondary"/><path class="primary sab8vnk7f"/></g>`,
		"fallback": "iconaut:metronome-duotone",
	});
}

export default Component;

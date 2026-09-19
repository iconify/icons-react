import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u8rgrcqdt.css';
import '../../css/x/x1h184bjr.css';
import '../../css/s/seqarwbcd.css';
import '../../css/f/ffvfie7iu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u8rgrcqdt"/><path class="x1h184bjr"/><path class="seqarwbcd"/><path class="ffvfie7iu"/></g>`,
		"fallback": "catppuccin:tauri",
	});
}

export default Component;

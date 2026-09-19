import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/an3xjeo3y.css';
import '../../css/s/s31f3r_ey.css';
import '../../css/x/xgwtkcfyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="subtask-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="an3xjeo3y"/><path class="s31f3r_ey"/><path class="xgwtkcfyj"/></g></g>`,
		"fallback": "cuida:subtask-outline",
	});
}

export default Component;

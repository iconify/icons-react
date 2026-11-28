import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hznrpgila.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1n8nsa9o.css';
import '../../css/e/eo9ux15mb.css';
import '../../css/l/lexz42b7p.css';
import '../../css/m/muzvyrzzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hznrpgila secondary"/><g class="dt0cm9dhy primary"><path class="d1n8nsa9o"/><path class="eo9ux15mb"/><path class="lexz42b7p"/><path class="muzvyrzzs"/></g>`,
		"fallback": "iconaut:parking-meter-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrnv0amgf.css';
import '../../css/f/fl2qcob-p.css';
import '../../css/d/dt0ocrz6j.css';
import '../../css/m/mzih8kb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qrnv0amgf"><path class="fl2qcob-p"/><path clip-rule="evenodd" class="dt0ocrz6j"/><path class="mzih8kb1j"/></g>`,
		"fallback": "thesvg-color:openclaw-moltbot-clawdbot",
	});
}

export default Component;

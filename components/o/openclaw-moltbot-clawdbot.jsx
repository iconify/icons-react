import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnfomkb1n.css';
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
		"content": `<g class="n1lsf0bnc"><path class="rnfomkb1n"/><path clip-rule="evenodd" class="dt0ocrz6j"/><path class="mzih8kb1j"/></g>`,
		"fallback": "thesvg:openclaw-moltbot-clawdbot",
	});
}

export default Component;

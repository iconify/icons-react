import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/do4-6v2si.css';
import '../../css/p/pnc6h3v1b.css';
import '../../css/f/fx8h1r5he.css';
import '../../css/a/aklukkbda.css';
import '../../css/y/yi3y3cbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="do4-6v2si"/><path class="pnc6h3v1b wm-k"/><path class="fx8h1r5he wm-a"/><path class="aklukkbda wm-k"/><path class="wm-a yi3y3cbzw"/></g>`,
		"fallback": "withicons:rocket-sketch",
	});
}

export default Component;

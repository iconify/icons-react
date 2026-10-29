import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/p/pu2vm5q5g.css';
import '../../css/s/sdtvogbfk.css';
import '../../css/f/f3irf6y9z.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="pu2vm5q5g"/><path class="sdtvogbfk"/><path class="f3irf6y9z wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`,
		"fallback": "withicons-sticker:terminal",
	});
}

export default Component;

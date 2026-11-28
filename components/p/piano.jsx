import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/q/qrbng2b3u.css';
import '../../css/p/plckf1b3c.css';
import '../../css/j/jtvd72_-w.css';
import '../../css/m/mfi1oebda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ammxg4bjk"/><path class="qrbng2b3u"/><path class="plckf1b3c"/><path class="jtvd72_-w"/><path class="mfi1oebda"/></g>`,
		"fallback": "iconaut:piano",
	});
}

export default Component;

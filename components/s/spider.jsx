import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u0ydl9buk.css';
import '../../css/r/rq3z68bje.css';
import '../../css/t/tl-qtg4ay.css';
import '../../css/z/z7z6crbvt.css';
import '../../css/p/p3dq04btg.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u0ydl9buk"/><path class="rq3z68bje wm-shine"/><path class="tl-qtg4ay wm-k"/><path class="wm-a z7z6crbvt"/><path class="p3dq04btg wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:spider",
	});
}

export default Component;

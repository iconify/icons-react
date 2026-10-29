import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zztqtnb6y.css';
import '../../css/v/vxvkd-byg.css';
import '../../css/b/b-e4rzseu.css';
import '../../css/y/y8zs_kbpv.css';
import '../../css/q/q71xzgbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zztqtnb6y"/><path class="vxvkd-byg wm-deco"/><path class="b-e4rzseu wm-deco"/><path class="y8zs_kbpv"/><path class="q71xzgbmm"/></g>`,
		"fallback": "withicons:music-note-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkm5ywd2a.css';
import '../../css/i/i0edzy0vq.css';
import '../../css/h/hc-vp7b-z.css';
import '../../css/w/wzb1noicm.css';
import '../../css/y/y43r2nbts.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xkm5ywd2a"/><path class="i0edzy0vq"/><path class="hc-vp7b-z"/><path class="wzb1noicm"/><path class="wm-shine y43r2nbts"/><path class="sloj1fjmk wm-deco"/></g>`,
		"fallback": "withicons-sticker:layout-grid",
	});
}

export default Component;

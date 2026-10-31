import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfsca4s_e.css';
import '../../css/o/ohqhgibnw.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/l/lg39a2exg.css';
import '../../css/o/ok-9qdbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mfsca4s_e"/><path class="ohqhgibnw wm-shine"/><path class="wm-k zzgumwbxx"/><path class="lg39a2exg wm-s"/><path class="ok-9qdbsi wm-deco"/></g>`,
		"fallback": "withicons-kawaii:smartphone-charging",
	});
}

export default Component;

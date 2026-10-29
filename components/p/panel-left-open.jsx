import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/q/q8x_lhbys.css';
import '../../css/s/s30zzoevt.css';
import '../../css/j/jr929vbvi.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="q8x_lhbys"/><path class="s30zzoevt"/><path class="jr929vbvi wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`,
		"fallback": "withicons-sticker:panel-left-open",
	});
}

export default Component;

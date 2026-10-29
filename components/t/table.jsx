import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/h/higyq-bzk.css';
import '../../css/l/lvwtsacyh.css';
import '../../css/g/gndm8ubmm.css';
import '../../css/p/pf1-z5xoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="higyq-bzk"/><path class="lvwtsacyh"/><path class="gndm8ubmm wm-shine"/><path class="pf1-z5xoz wm-deco"/></g>`,
		"fallback": "withicons-sticker:table",
	});
}

export default Component;

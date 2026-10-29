import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a5ht9ubqz.css';
import '../../css/z/zwq6klb6b.css';
import '../../css/h/h5hbfd1hi.css';
import '../../css/n/nkuopefrk.css';
import '../../css/f/fam63c-5b.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a5ht9ubqz wm-shadow"/><path class="zwq6klb6b"/><path class="h5hbfd1hi"/><path class="nkuopefrk"/><path class="fam63c-5b wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`,
		"fallback": "withicons-sticker:minimize",
	});
}

export default Component;

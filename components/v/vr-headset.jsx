import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p7xtb1jti.css';
import '../../css/g/ge876rb1s.css';
import '../../css/h/hu6oh0b7y.css';
import '../../css/a/a7f2hvojq.css';
import '../../css/x/x71pznbcy.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="p7xtb1jti wm-shadow"/><path class="ge876rb1s"/><path class="hu6oh0b7y"/><path class="a7f2hvojq"/><path class="wm-shine x71pznbcy"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:vr-headset",
	});
}

export default Component;

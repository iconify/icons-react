import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r4vu0ob3i.css';
import '../../css/w/wn0a1jbxm.css';
import '../../css/d/dtjn1bc9f.css';
import '../../css/u/upjlw8b0o.css';
import '../../css/n/ndn3yubew.css';
import '../../css/i/ic12qmb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="r4vu0ob3i wm-shadow"/><path class="wn0a1jbxm"/><path class="dtjn1bc9f"/><path class="upjlw8b0o"/><path class="ndn3yubew wm-shine"/><path class="ic12qmb9a wm-deco"/></g>`,
		"fallback": "withicons-sticker:send",
	});
}

export default Component;

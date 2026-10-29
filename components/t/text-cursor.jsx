import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qsshopbyl.css';
import '../../css/e/evua23beh.css';
import '../../css/m/m1oeogbwv.css';
import '../../css/d/drmyw7bbm.css';
import '../../css/y/yqvnlvbln.css';
import '../../css/m/mukehqbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qsshopbyl wm-shadow"/><path class="evua23beh"/><path class="m1oeogbwv"/><path class="drmyw7bbm"/><path class="wm-shine yqvnlvbln"/><path class="mukehqbda wm-deco"/></g>`,
		"fallback": "withicons-sticker:text-cursor",
	});
}

export default Component;

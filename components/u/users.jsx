import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wabscub3x.css';
import '../../css/a/aykhyobqg.css';
import '../../css/f/fy4i88jki.css';
import '../../css/v/v8y-98bnm.css';
import '../../css/z/zar_0vgqz.css';
import '../../css/h/h57cjbcbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wabscub3x wm-shadow"/><path class="aykhyobqg wm-shadow"/><path class="fy4i88jki"/><path class="v8y-98bnm"/><path class="zar_0vgqz"/><path class="h57cjbcbl"/></g>`,
		"fallback": "withicons-brutal:users",
	});
}

export default Component;

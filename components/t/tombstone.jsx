import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nv44gjb1e.css';
import '../../css/b/btdmjfbdm.css';
import '../../css/h/hoeyknbxx.css';
import '../../css/i/i_gylybvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nv44gjb1e wm-shadow"/><path class="btdmjfbdm wm-shadow"/><path class="hoeyknbxx"/><path class="i_gylybvm"/></g>`,
		"fallback": "withicons-brutal:tombstone",
	});
}

export default Component;

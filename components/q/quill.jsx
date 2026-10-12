import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2s5nsa_i.css';
import '../../css/f/f45i39bss.css';
import '../../css/f/fohw_kt1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2s5nsa_i"/><path class="f45i39bss"/><path class="fohw_kt1i"/></g>`,
		"fallback": "andrsrxn:quill",
	});
}

export default Component;

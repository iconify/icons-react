import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbst8zz0t.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/z/z8x8bkbkr.css';
import '../../css/w/w26ehabue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wbst8zz0t"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="z8x8bkbkr"/><path class="w26ehabue"/></g>`,
		"fallback": "andrsrxn:user-circle",
	});
}

export default Component;

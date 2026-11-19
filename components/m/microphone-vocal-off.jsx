import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ag1nw1z.css';
import '../../css/v/v_cmgvbqv.css';
import '../../css/g/gj-2xib7l.css';
import '../../css/m/mke6xhgrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2ag1nw1z"/><circle class="v_cmgvbqv"/><path class="gj-2xib7l"/><path class="mke6xhgrt"/></g>`,
		"fallback": "andrsrxn:microphone-vocal-off",
	});
}

export default Component;

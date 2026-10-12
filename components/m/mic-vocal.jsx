import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ag1nw1z.css';
import '../../css/v/v_cmgvbqv.css';
import '../../css/l/l-1jopsyu.css';
import '../../css/y/y3avrusqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2ag1nw1z"/><circle transform="rotate(90 16.39 6.37)" class="v_cmgvbqv"/><path class="l-1jopsyu"/><path class="y3avrusqx"/></g>`,
		"fallback": "andrsrxn:mic-vocal",
	});
}

export default Component;

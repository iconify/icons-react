import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy0tlqb6a.css';
import '../../css/a/a0b_g_bgu.css';
import '../../css/o/o5qaj0b6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iy0tlqb6a"/><path clip-rule="evenodd" class="a0b_g_bgu"/><path class="o5qaj0b6o"/></g>`,
		"fallback": "streamline-plump-color:payment-recieve-7-flat",
	});
}

export default Component;

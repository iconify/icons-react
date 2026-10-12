import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5lfijrig.css';
import '../../css/o/orz70cckh.css';
import '../../css/h/h0uafv4dn.css';
import '../../css/t/to8e0bbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5lfijrig"/><path class="orz70cckh"/><rect transform="matrix(0 -1 -1 0 16.1 14.52)" class="h0uafv4dn"/><path class="to8e0bbpw"/></g>`,
		"fallback": "andrsrxn:microphone-filled",
	});
}

export default Component;

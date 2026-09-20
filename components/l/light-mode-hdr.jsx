import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1c6q3b7k.css';
import '../../css/w/w5ttxkblv.css';
import '../../css/j/jib-blh_i.css';
import '../../css/e/ent0oacid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1c6q3b7k"/><path class="w5ttxkblv"/><path class="jib-blh_i"/><path class="ent0oacid"/></g>`,
		"fallback": "streamline-ultimate-color:light-mode-hdr",
	});
}

export default Component;

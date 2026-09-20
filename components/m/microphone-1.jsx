import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idaqdi6bn.css';
import '../../css/g/gfpr6fa5n.css';
import '../../css/f/f1_3wz6jz.css';
import '../../css/r/rms5nyhzb.css';
import '../../css/l/lufvyp4hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idaqdi6bn"/><path class="gfpr6fa5n"/><path class="f1_3wz6jz"/><path class="rms5nyhzb"/><path class="lufvyp4hq"/></g>`,
		"fallback": "streamline-cyber-color:microphone-1",
	});
}

export default Component;

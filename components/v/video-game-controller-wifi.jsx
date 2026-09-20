import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vmng-hyni.css';
import '../../css/b/b_gp-2bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vmng-hyni"/><path class="b_gp-2bmq"/></g>`,
		"fallback": "streamline-freehand:video-game-controller-wifi",
	});
}

export default Component;

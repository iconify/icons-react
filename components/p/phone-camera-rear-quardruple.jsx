import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e_lzbkrcu.css';
import '../../css/p/ppp6rybqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e_lzbkrcu"/><path class="ppp6rybqv"/></g>`,
		"fallback": "streamline-freehand:phone-camera-rear-quardruple",
	});
}

export default Component;

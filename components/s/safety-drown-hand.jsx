import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z4gr06znr.css';
import '../../css/q/q_m77vh5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z4gr06znr"/><path class="q_m77vh5w"/></g>`,
		"fallback": "streamline-freehand:safety-drown-hand",
	});
}

export default Component;

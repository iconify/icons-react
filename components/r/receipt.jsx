import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/arvcdzblw.css';
import '../../css/q/q1k0p3b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="arvcdzblw"/><path class="q1k0p3b_s"/></g>`,
		"fallback": "streamline-freehand:receipt",
	});
}

export default Component;

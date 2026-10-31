import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k4lkvubxf.css';
import '../../css/d/d_24e-4kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k4lkvubxf wm-k"/><path class="d_24e-4kv wm-a"/></g>`,
		"fallback": "withicons:projector-gloss",
	});
}

export default Component;

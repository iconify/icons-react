import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pcvf36_hx.css';
import '../../css/o/opjo3bcfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pcvf36_hx wm-k"/><path class="opjo3bcfu wm-a"/></g>`,
		"fallback": "withicons:sparkles-gloss",
	});
}

export default Component;

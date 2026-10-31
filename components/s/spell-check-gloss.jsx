import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/em0ej-gca.css';
import '../../css/z/ztp2kv4xl.css';
import '../../css/m/mcyekutrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="em0ej-gca wm-k"/><path class="wm-a ztp2kv4xl"/><path class="mcyekutrd wm-s"/></g>`,
		"fallback": "withicons:spell-check-gloss",
	});
}

export default Component;

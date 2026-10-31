import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dxt0i1bul.css';
import '../../css/s/sk4vu6bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dxt0i1bul wm-k"/><path class="sk4vu6bmp wm-a"/></g>`,
		"fallback": "withicons:rangoli-pattern-gloss",
	});
}

export default Component;

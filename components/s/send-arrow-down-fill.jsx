import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f60r1bcpg.css';
import '../../css/w/wi3k8x65i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f60r1bcpg"/><path class="wi3k8x65i"/></g>`,
		"fallback": "bi:send-arrow-down-fill",
	});
}

export default Component;

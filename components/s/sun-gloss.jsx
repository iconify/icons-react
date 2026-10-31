import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tkg5a48_i.css';
import '../../css/g/g4pfk2vdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tkg5a48_i wm-k"/><path class="g4pfk2vdo wm-a"/></g>`,
		"fallback": "withicons:sun-gloss",
	});
}

export default Component;

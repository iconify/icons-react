import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/ppjeo_b_w.css';
import '../../css/k/k5k144bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ppjeo_b_w"/><path class="k5k144bnk"/></g>`,
		"fallback": "streamline-sharp:thermometer-positive",
	});
}

export default Component;

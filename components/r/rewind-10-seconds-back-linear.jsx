import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f1bmvd0na.css';
import '../../css/t/tgcis5bxj.css';
import '../../css/g/gj9cr867l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f1bmvd0na"/><path class="tgcis5bxj"/><path class="gj9cr867l"/></g>`,
		"fallback": "solar:rewind-10-seconds-back-linear",
	});
}

export default Component;

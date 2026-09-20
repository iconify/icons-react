import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w41jiomdh.css';
import '../../css/w/woon4w51a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w41jiomdh"/><path class="woon4w51a"/></g>`,
		"fallback": "majesticons:shooting-star",
	});
}

export default Component;

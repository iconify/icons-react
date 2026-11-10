import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk3wqebxh.css';
import '../../css/r/rucnbishu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gk3wqebxh"/><path class="rucnbishu"/></g>`,
		"fallback": "lucide:square-arrow-up-left-enter",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8u470byl.css';
import '../../css/y/ylsnslgij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h8u470byl"/><path class="ylsnslgij"/></g>`,
		"fallback": "lucide:mouth-off",
	});
}

export default Component;

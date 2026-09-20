import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8z5tr6vl.css';
import '../../css/c/c4pmn2eue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g8z5tr6vl"/><path class="c4pmn2eue"/></g>`,
		"fallback": "lucide:iteration-ccw",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ym03mlbhv.css';
import '../../css/g/g3myjzutu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ym03mlbhv"/><path class="g3myjzutu"/></g>`,
		"fallback": "lucide:milk",
	});
}

export default Component;

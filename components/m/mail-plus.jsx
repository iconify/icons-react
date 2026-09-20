import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbz4duvjr.css';
import '../../css/n/nd_752b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mbz4duvjr"/><path class="nd_752b2b"/></g>`,
		"fallback": "lucide:mail-plus",
	});
}

export default Component;

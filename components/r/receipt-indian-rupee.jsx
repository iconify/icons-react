import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i7tq9lf8s.css';
import '../../css/o/onqqh0b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i7tq9lf8s"/><path class="onqqh0b5x"/></g>`,
		"fallback": "lucide:receipt-indian-rupee",
	});
}

export default Component;

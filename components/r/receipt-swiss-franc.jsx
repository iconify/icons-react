import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_-znijxw.css';
import '../../css/h/hdypjtbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y_-znijxw"/><path class="hdypjtbib"/></g>`,
		"fallback": "lucide:receipt-swiss-franc",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnz8s4_9x.css';
import '../../css/z/zv6cqnbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnz8s4_9x"/><circle class="zv6cqnbnp"/></g>`,
		"fallback": "majesticons:map-marker-line",
	});
}

export default Component;

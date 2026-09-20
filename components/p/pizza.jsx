import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sws4e3s4w.css';
import '../../css/n/ne9bbkb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sws4e3s4w"/><path class="ne9bbkb0n"/></g>`,
		"fallback": "lucide:pizza",
	});
}

export default Component;

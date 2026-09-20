import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kmzftabsf.css';
import '../../css/n/ndbg64n1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kmzftabsf"/><path class="ndbg64n1k"/></g>`,
		"fallback": "streamline-sharp:notification-alarm-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nl0b44b0n.css';
import '../../css/y/ye1kmwbhc.css';
import '../../css/f/fjskp8bqk.css';
import '../../css/l/l8gxv0bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nl0b44b0n"/><path class="ye1kmwbhc"/><path class="fjskp8bqk"/><path class="l8gxv0bho"/></g>`,
		"fallback": "andrsrxn:pizza",
	});
}

export default Component;

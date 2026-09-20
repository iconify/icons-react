import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnn1j7k8u.css';
import '../../css/l/l3e4gabpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnn1j7k8u"/><path clip-rule="evenodd" class="l3e4gabpm"/></g>`,
		"fallback": "solar:running-round-bold",
	});
}

export default Component;

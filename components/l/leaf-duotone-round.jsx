import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7j7kfblz.css';
import '../../css/h/hi-hw134w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7j7kfblz"/><path class="hi-hw134w"/></g>`,
		"fallback": "coolicons:leaf-duotone-round",
	});
}

export default Component;

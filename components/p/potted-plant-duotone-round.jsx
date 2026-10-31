import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fv2y2eb1e.css';
import '../../css/q/qf3e30bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fv2y2eb1e"/><path class="qf3e30bpa"/></g>`,
		"fallback": "coolicons:potted-plant-duotone-round",
	});
}

export default Component;

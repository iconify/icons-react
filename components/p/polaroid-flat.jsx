import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5zfv-bpd.css';
import '../../css/s/solomrbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d5zfv-bpd"/><path class="solomrbvh"/></g>`,
		"fallback": "streamline-plump-color:polaroid-flat",
	});
}

export default Component;

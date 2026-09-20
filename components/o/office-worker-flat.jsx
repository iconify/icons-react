import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vylr-ybfh.css';
import '../../css/j/j79p42blm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vylr-ybfh"/><path clip-rule="evenodd" class="j79p42blm"/></g>`,
		"fallback": "streamline-plump-color:office-worker-flat",
	});
}

export default Component;

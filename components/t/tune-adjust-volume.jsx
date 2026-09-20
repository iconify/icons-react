import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/huarzwb0e.css';
import '../../css/o/od_iueq1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="huarzwb0e"/><path class="od_iueq1z"/></g>`,
		"fallback": "streamline-plump-color:tune-adjust-volume",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6d-m7w8a.css';
import '../../css/t/t_iavub9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6d-m7w8a"/><path clip-rule="evenodd" class="t_iavub9b"/></g>`,
		"fallback": "streamline-plump-color:parachute-drop-flat",
	});
}

export default Component;

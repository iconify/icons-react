import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/m/m4fm11vel.css';
import '../../css/e/ezy_p22ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="m4fm11vel"/><path class="ezy_p22ip"/>`,
		"fallback": "tdesign:task-time-filled",
	});
}

export default Component;

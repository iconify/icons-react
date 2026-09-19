import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfmxxebmr.css';
import '../../css/j/j6k0-dpwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfmxxebmr"/><path class="j6k0-dpwv"/>`,
		"fallback": "boxicons:microphone-alt-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/j/jbevh8ikd.css';
import '../../css/t/tdv22nbus.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="jbevh8ikd"/><path class="tdv22nbus"/></g>`,
		"fallback": "system-uicons:microphone",
	});
}

export default Component;

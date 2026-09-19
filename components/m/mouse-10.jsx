import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rev4qf8jr.css';
import '../../css/c/camt8iiuh.css';
import '../../css/t/t915txqbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rev4qf8jr"/><path class="camt8iiuh"/><path class="t915txqbu"/></g>`,
		"fallback": "hugeicons:mouse-10",
	});
}

export default Component;

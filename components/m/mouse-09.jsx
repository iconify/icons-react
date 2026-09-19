import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/camt8iiuh.css';
import '../../css/h/hya7a3byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="camt8iiuh"/><path class="hya7a3byn"/></g>`,
		"fallback": "hugeicons:mouse-09",
	});
}

export default Component;

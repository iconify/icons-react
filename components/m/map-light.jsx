import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t98jbcwdn.css';
import '../../css/m/msqpicc3e.css';
import '../../css/b/bkyqy-baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t98jbcwdn"/><path class="msqpicc3e"/><circle class="bkyqy-baq"/></g>`,
		"fallback": "lets-icons:map-light",
	});
}

export default Component;

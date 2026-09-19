import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g481v5a-l.css';
import '../../css/z/zidben71n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g481v5a-l"/><path class="zidben71n"/></g>`,
		"fallback": "hugeicons:touchpad-01",
	});
}

export default Component;

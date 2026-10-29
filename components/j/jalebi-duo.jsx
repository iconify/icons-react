import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uoqd-xitt.css';
import '../../css/v/vg2dc9z-o.css';
import '../../css/q/qt3_ghwjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uoqd-xitt"/><path class="vg2dc9z-o wm-a"/><path class="qt3_ghwjq"/></g>`,
		"fallback": "withicons:jalebi-duo",
	});
}

export default Component;

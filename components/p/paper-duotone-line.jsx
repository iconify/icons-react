import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qix69lb3d.css';
import '../../css/d/dapscsq3i.css';
import '../../css/x/xh-eorwfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qix69lb3d"/><path class="dapscsq3i"/><path class="xh-eorwfj"/></g>`,
		"fallback": "lets-icons:paper-duotone-line",
	});
}

export default Component;

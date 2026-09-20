import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-jzjzmoi.css';
import '../../css/f/fl2g_e01g.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-jzjzmoi"/><path class="fl2g_e01g"/><circle class="ygox79bep"/></g>`,
		"fallback": "lets-icons:unlock",
	});
}

export default Component;

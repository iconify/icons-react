import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qczgm22wk.css';
import '../../css/k/k3_uumdyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qczgm22wk"/><path class="k3_uumdyc"/></g>`,
		"fallback": "si:sunny-snowing-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk7xdgb3w.css';
import '../../css/a/anmzojybv.css';
import '../../css/w/wxjuyjb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gk7xdgb3w"/><path class="anmzojybv"/><path class="wxjuyjb5k"/></g>`,
		"fallback": "iconamoon:shield-yes-duotone",
	});
}

export default Component;

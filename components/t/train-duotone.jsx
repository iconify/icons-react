import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce01a5bpd.css';
import '../../css/x/xn83ck27j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ce01a5bpd"/><path class="xn83ck27j"/></g>`,
		"fallback": "si:train-duotone",
	});
}

export default Component;

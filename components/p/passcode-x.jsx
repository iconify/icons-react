import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yoidtrbcz.css';
import '../../css/a/a4mzgpb9x.css';
import '../../css/q/q0dugcn8n.css';
import '../../css/n/n4tyjxbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yoidtrbcz"/><path class="a4mzgpb9x"/><path class="q0dugcn8n"/><path class="n4tyjxbbg"/></g>`,
		"fallback": "andrsrxn:passcode-x",
	});
}

export default Component;

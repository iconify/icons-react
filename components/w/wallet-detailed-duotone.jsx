import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t24kg-brs.css';
import '../../css/t/ti-0kubfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t24kg-brs"/><path class="ti-0kubfn"/></g>`,
		"fallback": "si:wallet-detailed-duotone",
	});
}

export default Component;

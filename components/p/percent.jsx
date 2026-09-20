import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/lw1hl556r.css';
import '../../css/k/k0f9fhb0x.css';
import '../../css/y/y1axigmai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="lw1hl556r"/><circle class="k0f9fhb0x"/><circle class="y1axigmai"/></g>`,
		"fallback": "lets-icons:percent",
	});
}

export default Component;

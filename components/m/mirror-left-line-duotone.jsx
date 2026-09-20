import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uspitw7xi.css';
import '../../css/e/ermepzbeu.css';
import '../../css/d/dxon-mtqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uspitw7xi"/><path class="ermepzbeu"/><path class="dxon-mtqm"/></g>`,
		"fallback": "solar:mirror-left-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1tta3b2f.css';
import '../../css/e/eruig_ygc.css';
import '../../css/k/kmfuvw0ir.css';
import '../../css/i/iu3w7gbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="n1tta3b2f"/><path class="eruig_ygc"/><circle class="kmfuvw0ir"/><path class="iu3w7gbln"/></g>`,
		"fallback": "reicon:vault",
	});
}

export default Component;

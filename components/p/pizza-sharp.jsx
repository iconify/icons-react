import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk_5h9bdo.css';
import '../../css/s/szy7_c_ir.css';
import '../../css/t/t1sbpacqn.css';
import '../../css/o/oagcisb-y.css';
import '../../css/o/oxqeoe2ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk_5h9bdo"/><ellipse transform="rotate(-44.98 320.503 207.996)" class="szy7_c_ir"/><ellipse transform="rotate(-44.98 192.49 191.992)" class="t1sbpacqn"/><ellipse transform="rotate(-44.98 256.505 320)" class="oagcisb-y"/><path class="oxqeoe2ek"/>`,
		"fallback": "ion:pizza-sharp",
	});
}

export default Component;

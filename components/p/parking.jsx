import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/py52eubva.css';
import '../../css/k/kp82sp-kv.css';
import '../../css/i/izbmr-60y.css';
import '../../css/p/pd05_2bfa.css';
import '../../css/e/ea4jx_bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="py52eubva"/><path class="kp82sp-kv"/><path class="izbmr-60y"/><path class="pd05_2bfa"/><path class="ea4jx_bhw"/></g>`,
		"fallback": "matita:parking",
	});
}

export default Component;

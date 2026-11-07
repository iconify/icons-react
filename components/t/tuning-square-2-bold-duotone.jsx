import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbl5tccaq.css';
import '../../css/d/diir2xbcn.css';
import '../../css/j/j-gznccqg.css';
import '../../css/z/zepddnbmb.css';
import '../../css/c/cs9i8xbnw.css';
import '../../css/g/g0ldhibge.css';
import '../../css/m/mpawiibxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbl5tccaq"/><path class="diir2xbcn"/><path class="j-gznccqg"/><path class="zepddnbmb"/><path class="cs9i8xbnw"/><path clip-rule="evenodd" class="g0ldhibge"/><path clip-rule="evenodd" class="mpawiibxb"/>`,
		"fallback": "solar:tuning-square-2-bold-duotone",
	});
}

export default Component;

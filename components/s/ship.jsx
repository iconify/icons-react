import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qetnckbkp.css';
import '../../css/r/r6tjo0kod.css';
import '../../css/t/t4ape9b0e.css';
import '../../css/r/rgjv2g3ac.css';
import '../../css/i/ib5qy2uli.css';
import '../../css/y/yt8-bkbdk.css';
import '../../css/s/si9dxe_gy.css';
import '../../css/u/uqvbob--x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qetnckbkp"/><path class="r6tjo0kod"/><path class="t4ape9b0e"/><path class="rgjv2g3ac"/><path class="ib5qy2uli"/><path class="yt8-bkbdk"/><circle class="si9dxe_gy"/><path class="uqvbob--x"/>`,
		"fallback": "fxemoji:ship",
	});
}

export default Component;

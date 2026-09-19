import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v_y4m0_ez.css';
import '../../css/a/a_zfvt5pn.css';
import '../../css/y/yndw3pjie.css';
import '../../css/t/tpxw88bec.css';
import '../../css/q/qd-yj5low.css';
import '../../css/z/zghibhrhz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsQu0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsQu0)"><path class="v_y4m0_ez"/><path class="a_zfvt5pn"/><path class="yndw3pjie"/><path class="tpxw88bec"/><path class="qd-yj5low"/><path class="zghibhrhz"/></g>`,
		"fallback": "circle-flags:qu",
	});
}

export default Component;

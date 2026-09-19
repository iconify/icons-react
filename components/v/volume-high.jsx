import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_vsitbjn.css';
import '../../css/c/c_2_mxnve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_vsitbjn"/><path class="c_2_mxnve"/>`,
		"fallback": "cil:volume-high",
	});
}

export default Component;

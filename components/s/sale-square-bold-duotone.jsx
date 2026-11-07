import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/x/xlmjlhb0a.css';
import '../../css/q/qbv4dzbrn.css';
import '../../css/k/krx8b1blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="xlmjlhb0a"/><path class="qbv4dzbrn"/><path class="krx8b1blc"/>`,
		"fallback": "solar:sale-square-bold-duotone",
	});
}

export default Component;

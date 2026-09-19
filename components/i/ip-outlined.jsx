import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv_l6fzvt.css';
import '../../css/r/rz8l7i1vb.css';
import '../../css/q/qixglcefr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv_l6fzvt"/><path class="rz8l7i1vb"/><path class="qixglcefr"/>`,
		"fallback": "eos-icons:ip-outlined",
	});
}

export default Component;

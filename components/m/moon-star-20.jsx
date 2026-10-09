import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpdrb_b_d.css';
import '../../css/v/vqx3s2bml.css';
import '../../css/j/jmxwfobcl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpdrb_b_d"/><path class="vqx3s2bml"/><path class="jmxwfobcl"/>`,
		"fallback": "energy-icons:moon-star-20",
	});
}

export default Component;

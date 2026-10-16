import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-e1u6q-v.css';
import '../../css/y/ysk6l2evj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-e1u6q-v"/><path class="ysk6l2evj"/>`,
		"fallback": "energy-icons:solar-inverter-off-48-bold",
	});
}

export default Component;

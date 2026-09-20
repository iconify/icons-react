import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tepmsuqjt.css';
import '../../css/v/vk4obhbwh.css';
import '../../css/v/vj8wfz_3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="tepmsuqjt"/><path class="vk4obhbwh"/><path class="vj8wfz_3y"/></g>`,
		"fallback": "streamline-plump:presentation",
	});
}

export default Component;

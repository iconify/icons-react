import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0im2rdhh.css';
import '../../css/q/qa5f_6hbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0im2rdhh"/><path class="qa5f_6hbj"/>`,
		"fallback": "energy-icons:tower-section-48-bold",
	});
}

export default Component;

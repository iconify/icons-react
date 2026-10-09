import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3lp20htv.css';
import '../../css/k/k9l_q1t_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3lp20htv"/><path class="k9l_q1t_v"/>`,
		"fallback": "energy-icons:video-48-bold",
	});
}

export default Component;

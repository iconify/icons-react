import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq_kneo0b.css';
import '../../css/i/i-510_b_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq_kneo0b"/><path class="i-510_b_l"/>`,
		"fallback": "energy-icons:spillway-48",
	});
}

export default Component;

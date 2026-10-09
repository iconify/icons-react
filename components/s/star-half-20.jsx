import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_vc3bc-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_vc3bc-m"/>`,
		"fallback": "energy-icons:star-half-20",
	});
}

export default Component;

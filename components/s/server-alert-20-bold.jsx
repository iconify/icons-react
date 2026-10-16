import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5vx4lykm.css';
import '../../css/i/iwzjusbjd.css';
import '../../css/k/kapshj_5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5vx4lykm"/><path class="iwzjusbjd"/><path class="kapshj_5v"/>`,
		"fallback": "energy-icons:server-alert-20-bold",
	});
}

export default Component;

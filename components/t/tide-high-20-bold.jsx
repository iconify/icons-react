import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_3o7hbpq.css';
import '../../css/q/qfoc8pfkt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_3o7hbpq"/><path class="qfoc8pfkt"/>`,
		"fallback": "energy-icons:tide-high-20-bold",
	});
}

export default Component;

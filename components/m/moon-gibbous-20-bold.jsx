import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx2djpbfz.css';
import '../../css/w/w04ysbbuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx2djpbfz"/><path class="w04ysbbuw"/>`,
		"fallback": "energy-icons:moon-gibbous-20-bold",
	});
}

export default Component;

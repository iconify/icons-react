import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx2djpbfz.css';
import '../../css/m/m1or6kb0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx2djpbfz"/><path class="m1or6kb0k"/>`,
		"fallback": "energy-icons:moon-full-20-bold",
	});
}

export default Component;

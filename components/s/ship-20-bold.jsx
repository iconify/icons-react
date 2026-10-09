import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temu-lr3v.css';
import '../../css/n/nbj6_5v5v.css';
import '../../css/t/t6587jiay.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temu-lr3v"/><path class="nbj6_5v5v"/><path class="t6587jiay"/>`,
		"fallback": "energy-icons:ship-20-bold",
	});
}

export default Component;

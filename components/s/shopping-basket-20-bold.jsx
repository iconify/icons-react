import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knt-nibqh.css';
import '../../css/x/xysx9bb7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knt-nibqh"/><path class="xysx9bb7d"/>`,
		"fallback": "energy-icons:shopping-basket-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcs-irhnv.css';
import '../../css/z/zq0sxpb8q.css';
import '../../css/k/kr3y4cv8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcs-irhnv"/><path class="zq0sxpb8q"/><path class="kr3y4cv8i"/>`,
		"fallback": "energy-icons:tow-truck-20-bold",
	});
}

export default Component;

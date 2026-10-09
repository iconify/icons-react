import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/punxieblh.css';
import '../../css/z/zi252sbbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="punxieblh"/><path class="zi252sbbj"/>`,
		"fallback": "energy-icons:sun-bolt-20-bold",
	});
}

export default Component;

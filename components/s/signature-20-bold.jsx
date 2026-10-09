import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqsb49kgr.css';
import '../../css/a/ahzc34b2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqsb49kgr"/><path class="ahzc34b2e"/>`,
		"fallback": "energy-icons:signature-20-bold",
	});
}

export default Component;

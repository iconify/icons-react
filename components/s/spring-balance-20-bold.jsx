import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqojcvb-w.css';
import '../../css/g/g64mwldzs.css';
import '../../css/b/bz5lwabqt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqojcvb-w"/><path class="g64mwldzs"/><path class="bz5lwabqt"/>`,
		"fallback": "energy-icons:spring-balance-20-bold",
	});
}

export default Component;

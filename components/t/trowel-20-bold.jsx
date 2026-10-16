import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s900nabfq.css';
import '../../css/w/w5mx-v3dw.css';
import '../../css/m/ma8aecusd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s900nabfq"/><path class="w5mx-v3dw"/><path class="ma8aecusd"/>`,
		"fallback": "energy-icons:trowel-20-bold",
	});
}

export default Component;

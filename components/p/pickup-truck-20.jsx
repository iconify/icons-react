import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg06azbhk.css';
import '../../css/g/gezow-b2p.css';
import '../../css/e/eiww21t6d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg06azbhk"/><path class="gezow-b2p"/><path class="eiww21t6d"/>`,
		"fallback": "energy-icons:pickup-truck-20",
	});
}

export default Component;

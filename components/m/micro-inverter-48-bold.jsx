import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c876zybxx.css';
import '../../css/n/njny6bb_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c876zybxx"/><path class="njny6bb_n"/>`,
		"fallback": "energy-icons:micro-inverter-48-bold",
	});
}

export default Component;

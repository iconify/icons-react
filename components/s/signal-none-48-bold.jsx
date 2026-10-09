import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn7333whg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn7333whg"/>`,
		"fallback": "energy-icons:signal-none-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stamzdbdq.css';
import '../../css/t/tusg1jm7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stamzdbdq"/><path class="tusg1jm7w"/>`,
		"fallback": "energy-icons:user-lock-48-bold",
	});
}

export default Component;

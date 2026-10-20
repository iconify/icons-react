import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce0cywmuu.css';
import '../../css/p/pf7rljwtp.css';
import '../../css/x/xl8x9eggy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce0cywmuu"/><path class="pf7rljwtp"/><path class="xl8x9eggy"/>`,
		"fallback": "energy-icons:shield-lock-48-bold",
	});
}

export default Component;

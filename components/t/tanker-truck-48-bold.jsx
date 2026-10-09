import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz3__6bfa.css';
import '../../css/a/af-u6v27p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz3__6bfa"/><path class="af-u6v27p"/>`,
		"fallback": "energy-icons:tanker-truck-48-bold",
	});
}

export default Component;

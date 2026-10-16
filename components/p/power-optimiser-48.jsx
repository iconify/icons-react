import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vywkd9w8n.css';
import '../../css/a/a8-928hoq.css';
import '../../css/c/cylgu_k9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vywkd9w8n"/><path class="a8-928hoq"/><path class="cylgu_k9i"/>`,
		"fallback": "energy-icons:power-optimiser-48",
	});
}

export default Component;

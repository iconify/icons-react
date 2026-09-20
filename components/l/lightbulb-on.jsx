import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2pnz7bgp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2pnz7bgp"/>`,
		"fallback": "system-uicons:lightbulb-on",
	});
}

export default Component;

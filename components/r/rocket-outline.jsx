import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnz88h8pe.css';
import '../../css/v/vs_irilvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnz88h8pe"/><path class="vs_irilvr"/>`,
		"fallback": "famicons:rocket-outline",
	});
}

export default Component;

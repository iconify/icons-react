import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpgv9kb_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpgv9kb_n"/>`,
		"fallback": "energy-icons:wave-energy-converter-48",
	});
}

export default Component;

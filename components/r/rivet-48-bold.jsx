import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8j44qm-v.css';
import '../../css/q/q7zl1sbxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8j44qm-v"/><path class="q7zl1sbxo"/>`,
		"fallback": "energy-icons:rivet-48-bold",
	});
}

export default Component;

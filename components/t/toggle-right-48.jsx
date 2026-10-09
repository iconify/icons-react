import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8z5zjbsy.css';
import '../../css/r/rurafzzht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8z5zjbsy"/><path class="rurafzzht"/>`,
		"fallback": "energy-icons:toggle-right-48",
	});
}

export default Component;

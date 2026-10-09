import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6i-fbqm.css';
import '../../css/n/ndjzvdb6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly6i-fbqm"/><path class="ndjzvdb6k"/>`,
		"fallback": "energy-icons:snowboard-48",
	});
}

export default Component;

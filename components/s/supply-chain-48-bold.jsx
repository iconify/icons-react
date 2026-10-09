import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9t92f57g.css';
import '../../css/c/c81pk53il.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9t92f57g"/><path class="c81pk53il"/>`,
		"fallback": "energy-icons:supply-chain-48-bold",
	});
}

export default Component;

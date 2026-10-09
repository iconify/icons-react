import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeyn_tb6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeyn_tb6l"/>`,
		"fallback": "energy-icons:menu-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tderinysh.css';
import '../../css/v/ve1blyb1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tderinysh"/><path class="ve1blyb1e"/>`,
		"fallback": "energy-icons:kettle-48",
	});
}

export default Component;

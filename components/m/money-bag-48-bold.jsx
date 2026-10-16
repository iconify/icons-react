import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctvev1biw.css';
import '../../css/q/qis7irbip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctvev1biw"/><path class="qis7irbip"/>`,
		"fallback": "energy-icons:money-bag-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm-zvw_lm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm-zvw_lm"/>`,
		"fallback": "energy-icons:puzzle-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_gbwm76b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_gbwm76b"/>`,
		"fallback": "healthicons:o2x-outline",
	});
}

export default Component;

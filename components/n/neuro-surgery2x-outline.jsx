import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-z8ibrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cu-z8ibrf"/>`,
		"fallback": "healthicons:neuro-surgery2x-outline",
	});
}

export default Component;

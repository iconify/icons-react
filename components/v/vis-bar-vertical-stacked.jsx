import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kft8x8isq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kft8x8isq"/>`,
		"fallback": "oui:vis-bar-vertical-stacked",
	});
}

export default Component;

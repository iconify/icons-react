import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv0sseb2v.css';
import '../../css/h/hgwopu5qn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv0sseb2v"/><path class="hgwopu5qn"/>`,
		"fallback": "flat-color-icons:sim-card-chip",
	});
}

export default Component;

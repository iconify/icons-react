import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6bv4yrfa.css';
import '../../css/p/pkyc0qbsh.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6bv4yrfa"/><path class="pkyc0qbsh"/>`,
		"fallback": "fontisto:ruby",
	});
}

export default Component;

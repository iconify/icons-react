import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egfs-cciu.css';
import '../../css/p/pu3k_cy8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="egfs-cciu"/><path class="pu3k_cy8i"/></g>`,
		"fallback": "iconamoon:mode-light-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksp_fmbqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksp_fmbqj"/>`,
		"fallback": "ix:sun",
	});
}

export default Component;

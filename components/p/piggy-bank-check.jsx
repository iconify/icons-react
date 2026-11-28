import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp_kx_kzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp_kx_kzr"/>`,
		"fallback": "noviair-light:piggy-bank-check",
	});
}

export default Component;

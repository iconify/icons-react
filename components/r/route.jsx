import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0e-0_k2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0e-0_k2x"/>`,
		"fallback": "ix:route",
	});
}

export default Component;

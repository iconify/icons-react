import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7l8_zb6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7l8_zb6r"/>`,
		"fallback": "ix:namur-failure",
	});
}

export default Component;

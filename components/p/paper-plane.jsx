import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfd5t0bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfd5t0bsn"/>`,
		"fallback": "bx:paper-plane",
	});
}

export default Component;

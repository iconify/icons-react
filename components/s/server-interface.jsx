import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox6q4zbtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox6q4zbtc"/>`,
		"fallback": "ix:server-interface",
	});
}

export default Component;

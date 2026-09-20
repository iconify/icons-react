import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9dp65n1d.css';
import '../../css/t/tqpzs3bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9dp65n1d"/><path class="tqpzs3bol"/>`,
		"fallback": "token:uno",
	});
}

export default Component;

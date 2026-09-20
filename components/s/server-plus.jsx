import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyduw2bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyduw2bud"/>`,
		"fallback": "mdi:server-plus",
	});
}

export default Component;

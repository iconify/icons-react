import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj06p7ubu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj06p7ubu"/>`,
		"fallback": "mdi:restore-page",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrza40bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrza40bty"/>`,
		"fallback": "token:phantom",
	});
}

export default Component;

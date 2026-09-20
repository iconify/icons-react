import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q15dvpbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q15dvpbdr"/>`,
		"fallback": "mdi:outside-temperature",
	});
}

export default Component;

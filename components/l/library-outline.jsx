import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrsa63b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrsa63b1n"/>`,
		"fallback": "mdi:library-outline",
	});
}

export default Component;

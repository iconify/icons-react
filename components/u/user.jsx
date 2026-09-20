import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwzk5mtti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwzk5mtti"/>`,
		"fallback": "mage:user",
	});
}

export default Component;

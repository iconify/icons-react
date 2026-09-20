import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v049klqdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v049klqdk"/>`,
		"fallback": "mdi:pail-plus-outline",
	});
}

export default Component;

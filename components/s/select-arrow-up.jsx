import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oubyt4bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oubyt4bje"/>`,
		"fallback": "mdi:select-arrow-up",
	});
}

export default Component;

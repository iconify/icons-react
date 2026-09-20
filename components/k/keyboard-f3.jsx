import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlrbr0wwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlrbr0wwr"/>`,
		"fallback": "mdi:keyboard-f3",
	});
}

export default Component;

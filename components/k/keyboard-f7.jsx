import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irk2yqbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irk2yqbfy"/>`,
		"fallback": "mdi:keyboard-f7",
	});
}

export default Component;

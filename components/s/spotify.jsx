import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnjay0bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnjay0bbk"/>`,
		"fallback": "mdi:spotify",
	});
}

export default Component;

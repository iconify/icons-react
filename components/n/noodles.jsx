import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl2z6zbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl2z6zbte"/>`,
		"fallback": "noviair-light:noodles",
	});
}

export default Component;

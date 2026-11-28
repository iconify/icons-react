import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq8e7qdjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq8e7qdjd"/>`,
		"fallback": "noviair-light:square-2",
	});
}

export default Component;

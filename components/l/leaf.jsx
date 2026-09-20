import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pot9u0jgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pot9u0jgo"/>`,
		"fallback": "pixelarticons:leaf",
	});
}

export default Component;

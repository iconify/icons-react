import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tasb54b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tasb54b7l"/>`,
		"fallback": "iconoir:key-back",
	});
}

export default Component;

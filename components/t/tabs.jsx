import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/untp8k7je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="untp8k7je"/>`,
		"fallback": "noviair-light:tabs",
	});
}

export default Component;

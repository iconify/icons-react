import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3e-q4b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3e-q4b9r"/>`,
		"fallback": "iconoir:perspective-view",
	});
}

export default Component;

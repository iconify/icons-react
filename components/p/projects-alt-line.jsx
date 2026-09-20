import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfd8-tb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfd8-tb0v"/>`,
		"fallback": "si:projects-alt-line",
	});
}

export default Component;

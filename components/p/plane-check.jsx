import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hie7b5bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hie7b5bnh"/>`,
		"fallback": "noviair-light:plane-check",
	});
}

export default Component;

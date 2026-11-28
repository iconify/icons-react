import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c45dohe0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c45dohe0z"/>`,
		"fallback": "noviair-light:smartphone-info",
	});
}

export default Component;

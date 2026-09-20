import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojdv29b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojdv29b3z"/>`,
		"fallback": "simple-icons:printables",
	});
}

export default Component;

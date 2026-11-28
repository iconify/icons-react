import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goq3nlbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goq3nlbut"/>`,
		"fallback": "noviair:owl",
	});
}

export default Component;

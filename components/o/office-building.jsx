import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu631ubgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu631ubgz"/>`,
		"fallback": "noviair:office-building",
	});
}

export default Component;

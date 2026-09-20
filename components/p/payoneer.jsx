import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk9k9sdqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk9k9sdqb"/>`,
		"fallback": "simple-icons:payoneer",
	});
}

export default Component;

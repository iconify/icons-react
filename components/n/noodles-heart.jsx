import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em_6a-_yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em_6a-_yo"/>`,
		"fallback": "noviair:noodles-heart",
	});
}

export default Component;

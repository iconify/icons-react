import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzbzq9bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzbzq9bdn"/>`,
		"fallback": "withicons:timer-gloss",
	});
}

export default Component;

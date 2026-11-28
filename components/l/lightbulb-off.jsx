import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrntyrbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrntyrbua"/>`,
		"fallback": "noviair:lightbulb-off",
	});
}

export default Component;

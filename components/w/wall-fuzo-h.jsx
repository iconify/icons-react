import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx5vx6b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx5vx6b6c"/>`,
		"fallback": "cbi:wall-fuzo-h",
	});
}

export default Component;

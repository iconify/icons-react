import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruo-o8h7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruo-o8h7c"/>`,
		"fallback": "noviair:podcast-play",
	});
}

export default Component;

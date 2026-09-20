import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra5q_ibby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra5q_ibby"/>`,
		"fallback": "pinhead:pixel-droplet",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gszf4yboo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gszf4yboo"/>`,
		"fallback": "selfhst:raspberry-pi-dark",
	});
}

export default Component;

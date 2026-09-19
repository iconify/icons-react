import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwcburvae.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwcburvae"/>`,
		"fallback": "whh:raspberrypi",
	});
}

export default Component;

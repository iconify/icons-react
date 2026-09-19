import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w315ns-nd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w315ns-nd"/>`,
		"fallback": "whh:lighthouse",
	});
}

export default Component;

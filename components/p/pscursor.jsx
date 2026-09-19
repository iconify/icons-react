import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scb29lb2y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scb29lb2y"/>`,
		"fallback": "whh:pscursor",
	});
}

export default Component;

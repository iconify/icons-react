import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6qanlb5l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6qanlb5l"/>`,
		"fallback": "whh:nucleus",
	});
}

export default Component;

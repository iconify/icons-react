import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5d7qozrq.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5d7qozrq"/>`,
		"fallback": "whh:squarefour",
	});
}

export default Component;

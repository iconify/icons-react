import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4v6-8p-u.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4v6-8p-u"/>`,
		"fallback": "whh:news",
	});
}

export default Component;

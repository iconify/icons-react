import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4yfsnzeo.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4yfsnzeo"/>`,
		"fallback": "whh:italic",
	});
}

export default Component;

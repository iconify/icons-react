import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0v6rsipu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0v6rsipu"/>`,
		"fallback": "whh:mybb",
	});
}

export default Component;

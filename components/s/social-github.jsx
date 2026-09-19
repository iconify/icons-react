import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s503_9beb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s503_9beb"/>`,
		"fallback": "foundation:social-github",
	});
}

export default Component;

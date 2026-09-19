import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0rps6bcz.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0rps6bcz"/>`,
		"fallback": "whh:phpbb",
	});
}

export default Component;

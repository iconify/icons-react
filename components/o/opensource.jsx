import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkerobcrj.css';

const viewBox = {"width":1024,"height":991};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkerobcrj"/>`,
		"fallback": "whh:opensource",
	});
}

export default Component;

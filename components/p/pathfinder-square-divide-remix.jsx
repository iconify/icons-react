import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jee4jzbyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jee4jzbyl"/>`,
		"fallback": "streamline:pathfinder-square-divide-remix",
	});
}

export default Component;

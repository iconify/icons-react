import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh0v953fc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh0v953fc"/>`,
		"fallback": "streamline:pathfinder-intersect",
	});
}

export default Component;

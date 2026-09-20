import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jekcgwb7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jekcgwb7w"/>`,
		"fallback": "streamline:pathfinder-square-merge-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-nd7obub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-nd7obub"/>`,
		"fallback": "streamline:interface-edit-pathfinder-merge-pathfinder-merge-work",
	});
}

export default Component;

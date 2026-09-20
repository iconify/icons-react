import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0y3r4nwc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0y3r4nwc"/>`,
		"fallback": "streamline:interface-edit-pathfinder-intersect-pathfinder-intersect-work",
	});
}

export default Component;

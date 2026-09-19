import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtzgfvdyl.css';
import '../../css/f/ff38w-bfl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtzgfvdyl"/><path class="ff38w-bfl"/>`,
		"fallback": "garden:translation-deleted-fill-12",
	});
}

export default Component;

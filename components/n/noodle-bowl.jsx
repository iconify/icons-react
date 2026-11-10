import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i73l00gnx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i73l00gnx"/>`,
		"fallback": "pinhead:noodle-bowl",
	});
}

export default Component;

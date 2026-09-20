import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxh2dlwch.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxh2dlwch"/>`,
		"fallback": "temaki:power-tower",
	});
}

export default Component;

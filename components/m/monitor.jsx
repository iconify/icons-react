import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia7ydhbcf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia7ydhbcf"/>`,
		"fallback": "memory:monitor",
	});
}

export default Component;

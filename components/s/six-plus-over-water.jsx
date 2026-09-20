import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i03w9cvef.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i03w9cvef"/>`,
		"fallback": "pinhead:six-plus-over-water",
	});
}

export default Component;

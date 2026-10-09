import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts6bgccjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts6bgccjd"/>`,
		"fallback": "energy-icons:spa-stones-20",
	});
}

export default Component;

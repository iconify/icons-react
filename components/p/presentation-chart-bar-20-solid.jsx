import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-b4ufqaq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-b4ufqaq"/>`,
		"fallback": "heroicons:presentation-chart-bar-20-solid",
	});
}

export default Component;

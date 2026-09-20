import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvyku1b5s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvyku1b5s"/>`,
		"fallback": "pinhead:plane-cruising-above-water",
	});
}

export default Component;

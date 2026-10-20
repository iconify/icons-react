import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxvbik02p.css';
import '../../css/n/nhbo4cseo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxvbik02p"/><path class="nhbo4cseo"/>`,
		"fallback": "energy-icons:message-question-20-bold",
	});
}

export default Component;

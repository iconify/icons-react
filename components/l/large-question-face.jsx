import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf32htb-q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf32htb-q"/>`,
		"fallback": "dinkie-icons:large-question-face",
	});
}

export default Component;

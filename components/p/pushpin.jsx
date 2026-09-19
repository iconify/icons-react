import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8q964p-n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8q964p-n"/>`,
		"fallback": "dinkie-icons:pushpin",
	});
}

export default Component;

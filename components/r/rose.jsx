import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku8r3qb-q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku8r3qb-q"/>`,
		"fallback": "dinkie-icons:rose",
	});
}

export default Component;

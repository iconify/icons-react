import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra3jirb7q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra3jirb7q"/>`,
		"fallback": "dinkie-icons:page-graphics",
	});
}

export default Component;

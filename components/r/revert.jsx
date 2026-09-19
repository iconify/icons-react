import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duiy32tko.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duiy32tko"/>`,
		"fallback": "dinkie-icons:revert",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm5c6wbbh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm5c6wbbh"/>`,
		"fallback": "dinkie-icons:keycap-digit-nine",
	});
}

export default Component;

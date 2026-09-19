import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yknjv8bbl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yknjv8bbl"/>`,
		"fallback": "dinkie-icons:size-text",
	});
}

export default Component;

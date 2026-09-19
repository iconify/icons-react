import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piax8-b3f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piax8-b3f"/>`,
		"fallback": "dinkie-icons:thumbs-up-sign",
	});
}

export default Component;

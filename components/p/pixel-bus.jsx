import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0zuo8b6u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0zuo8b6u"/>`,
		"fallback": "pinhead:pixel-bus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8uvx0z3r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8uvx0z3r"/>`,
		"fallback": "f7:text-justifyright",
	});
}

export default Component;

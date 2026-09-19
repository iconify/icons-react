import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa5ccwb9i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa5ccwb9i"/>`,
		"fallback": "devicon-plain:neovim",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfx6ry1aw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfx6ry1aw"/>`,
		"fallback": "radix-icons:stack",
	});
}

export default Component;

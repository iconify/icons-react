import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9ymmxkfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9ymmxkfx"/>`,
		"fallback": "fa-solid:smoking-ban",
	});
}

export default Component;

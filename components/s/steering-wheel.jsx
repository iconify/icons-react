import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmdz1kbua.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmdz1kbua"/>`,
		"fallback": "at-icons:steering-wheel",
	});
}

export default Component;

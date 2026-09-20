import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4kmywmzl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4kmywmzl"/>`,
		"fallback": "streamline:water-glass-remix",
	});
}

export default Component;

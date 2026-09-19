import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-bkk4bwu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-bkk4bwu"/>`,
		"fallback": "garden:terminal-cli-fill-16",
	});
}

export default Component;

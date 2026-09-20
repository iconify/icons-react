import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr9xuub5q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cr9xuub5q"/>`,
		"fallback": "streamline:module-puzzle-3-remix",
	});
}

export default Component;

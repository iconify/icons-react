import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2d8-qbob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2d8-qbob"/>`,
		"fallback": "streamline:one-finger-drag-vertical-remix",
	});
}

export default Component;

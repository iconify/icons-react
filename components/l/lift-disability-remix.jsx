import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owo7x-n0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owo7x-n0q"/>`,
		"fallback": "streamline:lift-disability-remix",
	});
}

export default Component;

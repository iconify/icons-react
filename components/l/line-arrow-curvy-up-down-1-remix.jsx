import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsvl-8b0y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsvl-8b0y"/>`,
		"fallback": "streamline:line-arrow-curvy-up-down-1-remix",
	});
}

export default Component;

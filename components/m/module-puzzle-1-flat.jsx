import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju65gdzvz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ju65gdzvz"/>`,
		"fallback": "streamline-color:module-puzzle-1-flat",
	});
}

export default Component;

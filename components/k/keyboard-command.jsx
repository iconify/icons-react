import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0y7dybjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0y7dybjb"/>`,
		"fallback": "streamline-freehand-color:keyboard-command",
	});
}

export default Component;

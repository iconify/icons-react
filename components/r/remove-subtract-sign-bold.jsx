import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9r9llbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9r9llbfe"/>`,
		"fallback": "streamline-freehand-color:remove-subtract-sign-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-1elsbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-1elsbgj"/>`,
		"fallback": "streamline-freehand-color:resize-arrow-expand-vertical-1",
	});
}

export default Component;

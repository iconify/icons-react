import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ekl4b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ekl4b5x"/>`,
		"fallback": "streamline-freehand-color:loading-star-1",
	});
}

export default Component;

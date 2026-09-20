import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y80byoa3x.css';
import '../../css/r/rluq7wbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y80byoa3x"/><path class="rluq7wbqw"/></g>`,
		"fallback": "streamline-ultimate-color:loading",
	});
}

export default Component;

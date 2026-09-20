import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x95dqkbro.css';
import '../../css/a/aestazbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x95dqkbro"/><path class="aestazbrq"/></g>`,
		"fallback": "streamline-freehand-color:messages-bubble-square-search",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6fzh7mhw.css';
import '../../css/y/yqn4117yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6fzh7mhw"/><path class="yqn4117yu"/></g>`,
		"fallback": "streamline-freehand-color:smiley-blush",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou56adbok.css';
import '../../css/h/h_2d7brce.css';
import '../../css/f/fzqb7dbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ou56adbok"/><path class="h_2d7brce"/><path clip-rule="evenodd" class="fzqb7dbrr"/></g>`,
		"fallback": "streamline-sharp-color:strategy-tasks-flat",
	});
}

export default Component;

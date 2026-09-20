import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzn9orbim.css';
import '../../css/a/acek9actp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yzn9orbim"/><path class="acek9actp"/></g>`,
		"fallback": "streamline-sharp-color:magic-wand-2-flat",
	});
}

export default Component;

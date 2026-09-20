import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ui423wnrg.css';
import '../../css/e/en25ubcss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ui423wnrg"/><path class="en25ubcss"/></g>`,
		"fallback": "streamline-freehand-color:light-mode-brightness-half",
	});
}

export default Component;

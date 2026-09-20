import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e_xwveb3l.css';
import '../../css/o/ovdi5d_rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e_xwveb3l"/><path class="ovdi5d_rl"/></g>`,
		"fallback": "streamline-freehand-color:office-desk-lamp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dfyljwbhk.css';
import '../../css/s/s_ploobxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dfyljwbhk"/><path class="s_ploobxp"/></g>`,
		"fallback": "streamline-freehand-color:upload-menu",
	});
}

export default Component;

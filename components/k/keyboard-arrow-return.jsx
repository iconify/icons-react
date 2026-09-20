import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70lsgs8c.css';
import '../../css/v/v-bm5hswa.css';
import '../../css/j/j23xr8ndi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="w70lsgs8c"><path class="v-bm5hswa"/><path class="j23xr8ndi"/></g>`,
		"fallback": "streamline-freehand-color:keyboard-arrow-return",
	});
}

export default Component;

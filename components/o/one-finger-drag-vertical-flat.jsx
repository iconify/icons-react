import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtg785-ti.css';
import '../../css/p/podkqib0k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtg785-ti"/><path clip-rule="evenodd" class="podkqib0k"/></g>`,
		"fallback": "streamline-color:one-finger-drag-vertical-flat",
	});
}

export default Component;

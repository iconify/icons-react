import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqlrkev6b.css';
import '../../css/z/ztppdjb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vqlrkev6b"/><path clip-rule="evenodd" class="ztppdjb3i"/></g>`,
		"fallback": "streamline-flex-color:magnifying-glass-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jn7pmab9b.css';
import '../../css/c/cefiksb1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jn7pmab9b"/><path class="cefiksb1w"/></g>`,
		"fallback": "streamline-color:layers-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abpbywgdg.css';
import '../../css/i/i-4b5jb7d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="abpbywgdg"/><path class="i-4b5jb7d"/></g>`,
		"fallback": "streamline-color:navigation-arrow-on",
	});
}

export default Component;

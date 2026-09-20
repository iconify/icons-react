import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18id-9mf.css';
import '../../css/s/sqoxggbuw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z18id-9mf"/><path clip-rule="evenodd" class="sqoxggbuw"/></g>`,
		"fallback": "streamline-color:peace-hand-flat",
	});
}

export default Component;

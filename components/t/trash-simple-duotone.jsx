import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mf154k2nu.css';
import '../../css/d/dh9jxcufs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mf154k2nu"/><path class="dh9jxcufs"/></g>`,
		"fallback": "iconamoon:trash-simple-duotone",
	});
}

export default Component;

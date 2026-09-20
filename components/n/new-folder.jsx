import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc3n0fbcl.css';
import '../../css/x/xjwrg-bzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sc3n0fbcl"/><path class="xjwrg-bzh"/></g>`,
		"fallback": "streamline-flex-color:new-folder",
	});
}

export default Component;

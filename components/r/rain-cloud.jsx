import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-rs9ub5w.css';
import '../../css/f/f3xbde9dh.css';
import '../../css/g/gmey1up1z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-rs9ub5w"/><path class="f3xbde9dh"/><path class="gmey1up1z"/></g>`,
		"fallback": "streamline-color:rain-cloud",
	});
}

export default Component;

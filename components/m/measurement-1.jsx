import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hckeefbqe.css';
import '../../css/u/ur0xw90mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hckeefbqe"/><path class="ur0xw90mx"/></g>`,
		"fallback": "tdesign:measurement-1",
	});
}

export default Component;

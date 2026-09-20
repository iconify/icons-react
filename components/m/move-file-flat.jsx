import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0hug8bsy.css';
import '../../css/w/w1ohp4baa.css';
import '../../css/m/msyv18brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g0hug8bsy"/><path class="w1ohp4baa"/><path clip-rule="evenodd" class="msyv18brm"/></g>`,
		"fallback": "streamline-sharp-color:move-file-flat",
	});
}

export default Component;

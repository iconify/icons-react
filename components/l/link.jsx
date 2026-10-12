import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ua9zu3jkp.css';
import '../../css/m/mfrfv3b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 16.88 -.35)" class="ua9zu3jkp"/><path class="mfrfv3b7m"/></g>`,
		"fallback": "andrsrxn:link",
	});
}

export default Component;

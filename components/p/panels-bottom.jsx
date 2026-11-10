import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shiq77epe.css';
import '../../css/v/vwmjjn15i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shiq77epe"/><path class="vwmjjn15i"/></g>`,
		"fallback": "andrsrxn:panels-bottom",
	});
}

export default Component;

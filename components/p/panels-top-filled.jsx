import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekv8dnfdk.css';
import '../../css/v/vwmjjn15i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekv8dnfdk"/><path class="vwmjjn15i"/></g>`,
		"fallback": "andrsrxn:panels-top-filled",
	});
}

export default Component;

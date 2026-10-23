import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6rjm0bwb.css';
import '../../css/e/eoxmznb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r6rjm0bwb"/><path class="eoxmznb3v"/></g>`,
		"fallback": "andrsrxn:mustache",
	});
}

export default Component;

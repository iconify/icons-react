import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at2hwbuuf.css';
import '../../css/i/inpq61vtr.css';
import '../../css/h/hn0v7obye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="at2hwbuuf"/><rect class="inpq61vtr"/><path class="hn0v7obye"/></g>`,
		"fallback": "andrsrxn:suitcase",
	});
}

export default Component;

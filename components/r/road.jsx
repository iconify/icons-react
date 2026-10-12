import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7xwfcc1b.css';
import '../../css/b/bq1h8fbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7xwfcc1b"/><path class="bq1h8fbwz"/></g>`,
		"fallback": "andrsrxn:road",
	});
}

export default Component;

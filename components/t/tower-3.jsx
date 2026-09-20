import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyloxrbev.css';
import '../../css/x/x9tj0nbkn.css';
import '../../css/z/zo52ynbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nyloxrbev"/><path class="x9tj0nbkn"/><path class="zo52ynbsn"/></g>`,
		"fallback": "tdesign:tower-3",
	});
}

export default Component;

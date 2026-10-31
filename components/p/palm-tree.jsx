import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ew9tz4bmz.css';
import '../../css/w/w1fsq0zwn.css';
import '../../css/f/f5bz_s3tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ew9tz4bmz wm-shadow"/><path class="w1fsq0zwn wm-shadow"/><path class="f5bz_s3tr"/></g>`,
		"fallback": "withicons-brutal:palm-tree",
	});
}

export default Component;

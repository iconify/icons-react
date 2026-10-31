import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xvhcfdc7w.css';
import '../../css/i/i9yds1bhx.css';
import '../../css/z/z3c37ob2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xvhcfdc7w"/><path class="i9yds1bhx wm-shadow"/><path class="z3c37ob2w"/></g>`,
		"fallback": "withicons-brutal:recycle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cf32ksbqs.css';
import '../../css/b/bom-c3hbm.css';
import '../../css/n/nuk7_1b8b.css';
import '../../css/j/jd6p_sb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cf32ksbqs wm-shadow"/><path class="bom-c3hbm wm-shadow"/><path class="nuk7_1b8b"/><path class="jd6p_sb6n"/></g>`,
		"fallback": "withicons-brutal:shirt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wlqe03b9w.css';
import '../../css/o/o2jwoih-n.css';
import '../../css/i/irkrcebde.css';
import '../../css/b/b8nn45b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wlqe03b9w wm-shadow"/><path class="o2jwoih-n wm-shadow"/><path class="irkrcebde"/><path class="b8nn45b_t"/></g>`,
		"fallback": "withicons-brutal:shield-half",
	});
}

export default Component;

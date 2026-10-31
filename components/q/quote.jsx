import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vifw3eb0i.css';
import '../../css/p/p9y9icnbb.css';
import '../../css/g/gg_xv4o4z.css';
import '../../css/h/h4eli7bat.css';
import '../../css/j/jxzmdxbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vifw3eb0i wm-shadow"/><path class="p9y9icnbb wm-shadow"/><path class="gg_xv4o4z"/><path class="h4eli7bat"/><path class="jxzmdxbhd"/></g>`,
		"fallback": "withicons-brutal:quote",
	});
}

export default Component;

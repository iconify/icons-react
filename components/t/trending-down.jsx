import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uflzh1b8g.css';
import '../../css/b/bihzuwyoc.css';
import '../../css/w/w76eqmxrl.css';
import '../../css/d/dmzxlrb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uflzh1b8g wm-shadow"/><path class="bihzuwyoc wm-shadow"/><path class="w76eqmxrl"/><path class="dmzxlrb1i"/></g>`,
		"fallback": "withicons-brutal:trending-down",
	});
}

export default Component;

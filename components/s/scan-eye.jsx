import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r852d6k4v.css';
import '../../css/j/j2lt8dwmd.css';
import '../../css/u/ud1lolucm.css';
import '../../css/i/iiyf65bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r852d6k4v wm-shadow"/><path class="j2lt8dwmd wm-shadow"/><path class="ud1lolucm"/><path class="iiyf65bkn"/></g>`,
		"fallback": "withicons-brutal:scan-eye",
	});
}

export default Component;

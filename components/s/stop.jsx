import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r78-4rbba.css';
import '../../css/s/swkdn-bfv.css';
import '../../css/b/b62ic8bgu.css';
import '../../css/f/fytbxtoad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r78-4rbba wm-shadow"/><path class="swkdn-bfv wm-shadow"/><path class="b62ic8bgu"/><path class="fytbxtoad"/></g>`,
		"fallback": "withicons-brutal:stop",
	});
}

export default Component;

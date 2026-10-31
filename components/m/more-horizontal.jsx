import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/olch4qxxi.css';
import '../../css/b/b5ffqpx6z.css';
import '../../css/r/r3j1v0bfk.css';
import '../../css/n/n9khbr3yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="olch4qxxi wm-shadow"/><path class="b5ffqpx6z wm-shadow"/><path class="r3j1v0bfk"/><path class="n9khbr3yt"/></g>`,
		"fallback": "withicons-brutal:more-horizontal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xdwzsgdrd.css';
import '../../css/f/fnomx0bsr.css';
import '../../css/d/dajmntbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xdwzsgdrd"/><path class="fnomx0bsr wm-shadow"/><path class="dajmntbuu"/></g>`,
		"fallback": "withicons-brutal:move",
	});
}

export default Component;

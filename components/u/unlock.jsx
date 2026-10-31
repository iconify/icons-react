import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xjx4jsz_i.css';
import '../../css/v/vcnkk595l.css';
import '../../css/k/kzbjxkbod.css';
import '../../css/o/osmm_9hor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xjx4jsz_i"/><path class="vcnkk595l wm-shadow"/><path class="kzbjxkbod"/><path class="osmm_9hor"/></g>`,
		"fallback": "withicons-brutal:unlock",
	});
}

export default Component;

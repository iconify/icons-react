import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dpdeg3i2t.css';
import '../../css/r/rmf8ov87u.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/u/u5r7-lb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dpdeg3i2t wm-shadow"/><path class="rmf8ov87u wm-shadow"/><path class="cvpr-5bot"/><path class="u5r7-lb8t"/></g>`,
		"fallback": "withicons-brutal:sidebar",
	});
}

export default Component;

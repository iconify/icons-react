import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vi1qgybkc.css';
import '../../css/l/lk0ygb_nh.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vi1qgybkc"/><path class="lk0ygb_nh"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:more-vertical",
	});
}

export default Component;

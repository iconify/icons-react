import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i_8b8dbbp.css';
import '../../css/w/wtgv0tbad.css';
import '../../css/l/l9yga1h-l.css';
import '../../css/p/piwvb9bmf.css';
import '../../css/y/yev8gbc7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i_8b8dbbp wm-shadow"/><path class="wm-shadow wtgv0tbad"/><path class="l9yga1h-l"/><path class="piwvb9bmf"/><path class="yev8gbc7e"/></g>`,
		"fallback": "withicons-brutal:tablet",
	});
}

export default Component;

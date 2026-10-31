import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x1tq5beki.css';
import '../../css/t/thaw_7b4x.css';
import '../../css/l/lkcux1bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x1tq5beki"/><path class="thaw_7b4x wm-shadow"/><path class="lkcux1bhs"/></g>`,
		"fallback": "withicons-brutal:playground",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0lx0cb_d.css';
import '../../css/w/wmq89w7_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0lx0cb_d"/><path class="wmq89w7_p"/>`,
		"fallback": "tdesign:system-marked-filled",
	});
}

export default Component;

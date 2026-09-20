import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gu7-l2n9m.css';
import '../../css/p/p8q8ybo9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gu7-l2n9m"/><path class="p8q8ybo9b"/></g>`,
		"fallback": "tdesign:send-1",
	});
}

export default Component;

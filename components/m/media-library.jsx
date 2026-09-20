import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rreixub1u.css';
import '../../css/e/ezppmdskh.css';
import '../../css/y/yhr7tbcrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rreixub1u"/><path class="ezppmdskh"/><path class="yhr7tbcrq"/></g>`,
		"fallback": "tdesign:media-library",
	});
}

export default Component;

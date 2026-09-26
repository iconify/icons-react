import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/al79j7shr.css';
import '../../css/s/sjrp4tbnl.css';
import '../../css/t/tdtdzw8lk.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="al79j7shr"/><path class="sjrp4tbnl"/><path class="tdtdzw8lk"/><path class="b2vvr6bvh"/></g>`,
		"fallback": "solar:rows-4-line-duotone",
	});
}

export default Component;

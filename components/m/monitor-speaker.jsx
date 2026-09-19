import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok65f3bhe.css';
import '../../css/a/a03vgacgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ok65f3bhe"/><path class="a03vgacgr"/></g>`,
		"fallback": "hugeicons:monitor-speaker",
	});
}

export default Component;

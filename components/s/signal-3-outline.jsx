import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/log4wdd9f.css';
import '../../css/q/q7yn_dbwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="log4wdd9f"/><path class="q7yn_dbwc"/></g>`,
		"fallback": "glyphs:signal-3-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bp0sfpbge.css';
import '../../css/i/ig5a48g4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bp0sfpbge"/><path class="ig5a48g4q"/></g>`,
		"fallback": "hugeicons:wand-sparkles",
	});
}

export default Component;

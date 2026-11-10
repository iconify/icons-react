import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6wedcysg.css';
import '../../css/j/jiz6i4e4q.css';
import '../../css/v/va1l46f4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d6wedcysg"/><path class="jiz6i4e4q"/><path class="va1l46f4v"/></g>`,
		"fallback": "andrsrxn:matrix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnaonbckk.css';
import '../../css/d/db9u3ij6k.css';
import '../../css/f/fa211pb5n.css';
import '../../css/z/zf5aygbbh.css';
import '../../css/q/q-j7pjang.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnaonbckk"/><path class="db9u3ij6k"/><path class="fa211pb5n"/><path class="zf5aygbbh"/><path class="q-j7pjang"/></g>`,
		"fallback": "streamline-freehand-color:laptop-action-warning",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wy3d1eixi.css';
import '../../css/l/l4-920b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wy3d1eixi"/><path class="l4-920b4z"/></g>`,
		"fallback": "streamline-freehand-color:time-wrist-watch-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vu-fdqm0c.css';
import '../../css/v/vx087jvof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vu-fdqm0c"/><path class="vx087jvof"/></g>`,
		"fallback": "streamline-freehand-color:mask-diamond",
	});
}

export default Component;

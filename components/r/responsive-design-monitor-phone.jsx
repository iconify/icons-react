import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l3q2vmw4r.css';
import '../../css/u/ufc6d3x9p.css';
import '../../css/y/yiq1rruyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l3q2vmw4r"/><path class="ufc6d3x9p"/><path class="yiq1rruyu"/></g>`,
		"fallback": "streamline-freehand-color:responsive-design-monitor-phone",
	});
}

export default Component;

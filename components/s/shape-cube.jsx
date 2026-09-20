import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_kv34bwu.css';
import '../../css/v/vbno8kv6y.css';
import '../../css/h/hsnp8gqct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b_kv34bwu"/><path class="vbno8kv6y"/><path class="hsnp8gqct"/></g>`,
		"fallback": "streamline-freehand-color:shape-cube",
	});
}

export default Component;

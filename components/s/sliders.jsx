import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zh9ba6b8p.css';
import '../../css/m/m47se9byi.css';
import '../../css/j/j21j_j0wt.css';
import '../../css/m/mcjdb0bzu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zh9ba6b8p"/><path class="m47se9byi"/><path class="j21j_j0wt"/><path class="mcjdb0bzu"/></g>`,
		"fallback": "pepicons-pencil:sliders",
	});
}

export default Component;

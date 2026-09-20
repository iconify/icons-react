import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lvt59gb2l.css';
import '../../css/o/ol50m0bou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lvt59gb2l"/><path class="ol50m0bou"/></g>`,
		"fallback": "pepicons-print:triangle-down-filled",
	});
}

export default Component;

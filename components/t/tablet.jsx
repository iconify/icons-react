import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/erl25bbux.css';
import '../../css/o/ot-cn5bfs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="erl25bbux"/><path class="ot-cn5bfs"/></g>`,
		"fallback": "pepicons-pencil:tablet",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o_9xfabov.css';
import '../../css/o/ozuq5ibmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o_9xfabov"/><path class="ozuq5ibmq"/></g>`,
		"fallback": "streamline-plump-color:rss-square-flat",
	});
}

export default Component;

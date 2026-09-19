import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a3egu4bnj.css';
import '../../css/y/yp5j8mbpq.css';
import '../../css/z/zri7a6b5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="a3egu4bnj"/><path class="yp5j8mbpq"/><path class="zri7a6b5o"/></g>`,
		"fallback": "icon-park-outline:shake",
	});
}

export default Component;

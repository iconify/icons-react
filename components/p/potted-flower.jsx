import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z8kw8-rfx.css';
import '../../css/c/cp8yk3bej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="z8kw8-rfx"/><path class="cp8yk3bej"/></g>`,
		"fallback": "streamline-plump:potted-flower",
	});
}

export default Component;

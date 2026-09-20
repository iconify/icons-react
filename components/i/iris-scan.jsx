import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mvv4-kb5c.css';
import '../../css/a/a_qdmqx0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mvv4-kb5c"/><path class="a_qdmqx0x"/></g>`,
		"fallback": "streamline-plump:iris-scan",
	});
}

export default Component;

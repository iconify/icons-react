import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d3ycrob1i.css';
import '../../css/e/e6ryrsbdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d3ycrob1i"/><path class="e6ryrsbdm"/></g>`,
		"fallback": "streamline-plump:warning-diamond",
	});
}

export default Component;

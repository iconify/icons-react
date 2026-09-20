import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p1m69zryk.css';
import '../../css/e/e7a57_2wy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="p1m69zryk"/><path class="e7a57_2wy"/></g>`,
		"fallback": "streamline-plump:store-2",
	});
}

export default Component;

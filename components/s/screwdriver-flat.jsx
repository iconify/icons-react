import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qediz07iq.css';
import '../../css/s/sdir1ibgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qediz07iq"/><path class="sdir1ibgq"/></g>`,
		"fallback": "streamline-plump-color:screwdriver-flat",
	});
}

export default Component;

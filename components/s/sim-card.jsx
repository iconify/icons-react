import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5rnlpo5e.css';
import '../../css/r/rmhzubc9s.css';
import '../../css/e/eq7n5wb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5rnlpo5e"/><circle class="rmhzubc9s"/><path class="eq7n5wb5d"/></g>`,
		"fallback": "icon-park-solid:sim-card",
	});
}

export default Component;

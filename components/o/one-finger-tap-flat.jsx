import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1y-svf-e.css';
import '../../css/c/cw5wf9gpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1y-svf-e"/><path clip-rule="evenodd" class="cw5wf9gpi"/></g>`,
		"fallback": "streamline-plump-color:one-finger-tap-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp4unbbsc.css';
import '../../css/x/xurtk2buy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kp4unbbsc"/><path class="xurtk2buy"/></g>`,
		"fallback": "streamline-plump-color:stroller-flat",
	});
}

export default Component;

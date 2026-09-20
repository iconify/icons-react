import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uu1kc7jsn.css';
import '../../css/r/rw-cld8dx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uu1kc7jsn"/><path class="rw-cld8dx"/></g>`,
		"fallback": "streamline-plump-color:test-tube-flat",
	});
}

export default Component;

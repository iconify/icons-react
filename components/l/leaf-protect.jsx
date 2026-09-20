import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rz38ef30w.css';
import '../../css/e/envxb6r8b.css';
import '../../css/n/n56dvhbyd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="rz38ef30w"/><path class="envxb6r8b"/><path class="n56dvhbyd"/></g>`,
		"fallback": "streamline-plump:leaf-protect",
	});
}

export default Component;

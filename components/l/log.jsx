import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x196fcb2d.css';
import '../../css/m/mfexoib1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x196fcb2d"/><path class="mfexoib1b"/></g>`,
		"fallback": "streamline-plump:log",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x4jim4w2k.css';
import '../../css/s/sh7spuq1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x4jim4w2k"/><path class="sh7spuq1c"/></g>`,
		"fallback": "streamline-plump:shuffle",
	});
}

export default Component;

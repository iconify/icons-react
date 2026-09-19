import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdz3rxb1o.css';
import '../../css/n/n9-t5ixox.css';
import '../../css/g/g108flszz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdz3rxb1o"/><path class="n9-t5ixox"/><path class="g108flszz"/></g>`,
		"fallback": "icon-park-outline:strongbox",
	});
}

export default Component;

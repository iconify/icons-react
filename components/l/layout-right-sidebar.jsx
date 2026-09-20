import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epkx3sbsn.css';
import '../../css/g/g95egibna.css';
import '../../css/u/us88oybum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epkx3sbsn"/><path class="g95egibna"/><path class="us88oybum"/></g>`,
		"fallback": "streamline-flex-color:layout-right-sidebar",
	});
}

export default Component;

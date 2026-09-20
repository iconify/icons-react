import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7k8j342o.css';
import '../../css/n/ngtlbkblt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v7k8j342o"/><path class="ngtlbkblt"/></g>`,
		"fallback": "streamline-flex-color:recycle-bin-3",
	});
}

export default Component;

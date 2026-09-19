import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdk62nw8s.css';
import '../../css/v/vxlrb8gwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bdk62nw8s"/><path class="vxlrb8gwx"/></g>`,
		"fallback": "cryptocurrency-color:nmr",
	});
}

export default Component;

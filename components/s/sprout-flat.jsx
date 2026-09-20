import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsqc_gx0t.css';
import '../../css/d/dy7oznxfk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tsqc_gx0t"/><path class="dy7oznxfk"/></g>`,
		"fallback": "streamline-color:sprout-flat",
	});
}

export default Component;

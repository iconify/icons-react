import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phqj-abvm.css';
import '../../css/n/nr1ilxf-o.css';
import '../../css/y/y_974tt6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phqj-abvm"/><path class="nr1ilxf-o"/><path class="y_974tt6h"/></g>`,
		"fallback": "andrsrxn:slides-thumbnails",
	});
}

export default Component;

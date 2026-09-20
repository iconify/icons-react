import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qypeg9b1z.css';
import '../../css/q/q9u-cabmd.css';
import '../../css/w/wpcya1b_y.css';
import '../../css/q/qhgn009xs.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qypeg9b1z"/><path class="q9u-cabmd"/><path class="wpcya1b_y"/><path class="qhgn009xs"/></g>`,
		"fallback": "skill-icons:processing-light",
	});
}

export default Component;

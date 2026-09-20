import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cjwl9iwht.css';
import '../../css/l/l26eq1b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cjwl9iwht"/><path class="l26eq1b7w"/></g>`,
		"fallback": "keyline-icons:plane-sharp-two-tone",
	});
}

export default Component;

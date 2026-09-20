import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el8ou_bgu.css';
import '../../css/f/fsh7t6b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="el8ou_bgu"/><path class="fsh7t6b2y"/></g>`,
		"fallback": "tdesign:mouse",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tzn2_abpy.css';
import '../../css/d/dggy76bvx.css';
import '../../css/s/sf3y2ibxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tzn2_abpy wm-shadow"/><path class="dggy76bvx wm-shadow"/><path class="sf3y2ibxf"/></g>`,
		"fallback": "withicons-brutal:qr-code",
	});
}

export default Component;

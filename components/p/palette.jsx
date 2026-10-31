import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v2n433bvh.css';
import '../../css/m/m-jxf2n6e.css';
import '../../css/a/aipyz6-ot.css';
import '../../css/q/q51_umb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v2n433bvh wm-shadow"/><path class="m-jxf2n6e wm-shadow"/><path class="aipyz6-ot"/><path class="q51_umb5q"/></g>`,
		"fallback": "withicons-brutal:palette",
	});
}

export default Component;

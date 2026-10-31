import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/g/gvl5rbbth.css';
import '../../css/o/oc_94pv_x.css';
import '../../css/b/bhkmnnb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="gvl5rbbth wm-shadow"/><path class="oc_94pv_x"/><path class="bhkmnnb8y"/></g>`,
		"fallback": "withicons-brutal:search-x",
	});
}

export default Component;

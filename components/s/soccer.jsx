import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rehf8xcql.css';
import '../../css/o/oz33jfbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rehf8xcql"/><path class="oz33jfbgi"/></g>`,
		"fallback": "proicons:soccer",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ouxafviye.css';
import '../../css/l/l-21uxusr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ouxafviye"/><path class="l-21uxusr"/></g>`,
		"fallback": "iconaut:thumbs-down",
	});
}

export default Component;

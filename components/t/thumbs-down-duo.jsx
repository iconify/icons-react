import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw8xrvjbq.css';
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
		"content": `<path class="rw8xrvjbq secondary"/><g class="dt0cm9dhy primary"><path class="ouxafviye"/><path class="l-21uxusr"/></g>`,
		"fallback": "iconaut:thumbs-down-duo",
	});
}

export default Component;

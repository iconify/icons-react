import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3d296bmx.css';
import '../../css/g/g3e73qb8p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG973ANSrX"><g class="ft5dv1b6b"><path class="n3d296bmx"/><path class="g3e73qb8p"/></g></mask></defs><path mask="url(#SVG973ANSrX)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:road-alt-duotone",
	});
}

export default Component;

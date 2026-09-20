import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/im_of-b7q.css';
import '../../css/t/tyu616ndb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="im_of-b7q"/><path class="tyu616ndb"/></g>`,
		"fallback": "lets-icons:watch-alt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd8qb6rig.css';
import '../../css/t/tvj-li2ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd8qb6rig"/><path class="tvj-li2ou"/>`,
		"fallback": "pixel:vote-yeah-solid",
	});
}

export default Component;

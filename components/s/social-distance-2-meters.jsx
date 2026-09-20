import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi4qhlvbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi4qhlvbr"/>`,
		"fallback": "mdi:social-distance-2-meters",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd526em5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd526em5n"/>`,
		"fallback": "ri:user-6-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2q1uzbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2q1uzbis"/>`,
		"fallback": "tabler:notification-off",
	});
}

export default Component;

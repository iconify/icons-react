import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6f3q9nuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6f3q9nuw"/>`,
		"fallback": "ri:user-location-line",
	});
}

export default Component;

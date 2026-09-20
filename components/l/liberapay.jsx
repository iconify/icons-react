import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dauc8q9yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dauc8q9yt"/>`,
		"fallback": "simple-icons:liberapay",
	});
}

export default Component;

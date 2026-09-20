import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ritv8ybea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ritv8ybea"/>`,
		"fallback": "streamline-ultimate:monitor-warning-bold",
	});
}

export default Component;

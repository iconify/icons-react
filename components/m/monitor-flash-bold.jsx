import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufjmd4l2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufjmd4l2f"/>`,
		"fallback": "streamline-ultimate:monitor-flash-bold",
	});
}

export default Component;

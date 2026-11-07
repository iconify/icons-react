import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdvcwidb.css';
import '../../css/w/wyg5aebcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdvcwidb"/><path class="wyg5aebcj"/>`,
		"fallback": "solar:round-arrow-up-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtt2647pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtt2647pm"/>`,
		"fallback": "simple-icons:rclone",
	});
}

export default Component;

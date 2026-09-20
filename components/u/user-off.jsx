import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5r0v41yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5r0v41yt"/>`,
		"fallback": "tabler:user-off",
	});
}

export default Component;

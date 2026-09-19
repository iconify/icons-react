import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-hm3t7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-hm3t7l"/>`,
		"fallback": "boxicons:volume-mute",
	});
}

export default Component;

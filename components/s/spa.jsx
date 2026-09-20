import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt3q6bctu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt3q6bctu"/>`,
		"fallback": "mdi:spa",
	});
}

export default Component;

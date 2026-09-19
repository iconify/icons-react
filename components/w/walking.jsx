import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt_demb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt_demb3i"/>`,
		"fallback": "boxicons:walking",
	});
}

export default Component;

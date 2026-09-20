import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7o2f7z5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7o2f7z5o"/>`,
		"fallback": "streamline-ultimate:move-to-bottom-bold",
	});
}

export default Component;

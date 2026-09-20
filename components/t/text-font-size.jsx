import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt_77-bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt_77-bpl"/>`,
		"fallback": "proicons:text-font-size",
	});
}

export default Component;

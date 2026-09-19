import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swx55lw8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swx55lw8s"/>`,
		"fallback": "iconamoon:screen-full-light",
	});
}

export default Component;

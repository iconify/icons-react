import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv8u7u5kw.css';
import '../../css/h/h1vzkebnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv8u7u5kw"/><path class="h1vzkebnj"/>`,
		"fallback": "streamline-freehand:smartphone-app-widget-stock",
	});
}

export default Component;

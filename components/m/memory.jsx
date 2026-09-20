import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkb26011h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkb26011h"/>`,
		"fallback": "mdi-light:memory",
	});
}

export default Component;

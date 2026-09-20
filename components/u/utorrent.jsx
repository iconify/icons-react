import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kznf9zb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kznf9zb4k"/>`,
		"fallback": "thesvg-color:utorrent",
	});
}

export default Component;

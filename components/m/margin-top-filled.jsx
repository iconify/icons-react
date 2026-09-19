import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8hv5m4d.css';
import '../../css/x/xn18y8bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8hv5m4d"/><rect class="xn18y8bul"/>`,
		"fallback": "boxicons:margin-top-filled",
	});
}

export default Component;

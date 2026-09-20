import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyvcxbgtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wyvcxbgtk"/>`,
		"fallback": "streamline-ultimate:power-outlet-type-f-bold",
	});
}

export default Component;

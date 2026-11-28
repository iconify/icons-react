import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcm9-cbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcm9-cbpf"/>`,
		"fallback": "iconaut:map-pin-off-solid",
	});
}

export default Component;

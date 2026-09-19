import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wds5kfh5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wds5kfh5k"/>`,
		"fallback": "boxicons:location-x-filled",
	});
}

export default Component;

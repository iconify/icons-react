import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzp6zjg4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzp6zjg4n"/>`,
		"fallback": "tabler:location-heart",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp2t3nbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp2t3nbwd"/>`,
		"fallback": "lucide:parasol",
	});
}

export default Component;

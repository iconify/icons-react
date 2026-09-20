import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcsgc4brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcsgc4brl"/>`,
		"fallback": "lucide:pound-sterling",
	});
}

export default Component;

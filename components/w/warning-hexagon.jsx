import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhtb0jn5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhtb0jn5l"/>`,
		"fallback": "iconoir:warning-hexagon",
	});
}

export default Component;

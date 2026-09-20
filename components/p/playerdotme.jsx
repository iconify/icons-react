import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q82i5zb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q82i5zb-n"/>`,
		"fallback": "thesvg-color:playerdotme",
	});
}

export default Component;

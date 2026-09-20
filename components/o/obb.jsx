import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghjy1xb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghjy1xb6r"/>`,
		"fallback": "thesvg-color:obb",
	});
}

export default Component;

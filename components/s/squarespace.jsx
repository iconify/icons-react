import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yngt0cb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yngt0cb3m"/>`,
		"fallback": "thesvg-color:squarespace",
	});
}

export default Component;

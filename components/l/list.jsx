import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7i3kf9ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7i3kf9ol"/>`,
		"fallback": "boxicons:list",
	});
}

export default Component;

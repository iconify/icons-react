import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woe70abka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woe70abka"/>`,
		"fallback": "reicon:map-arrow-left-filled",
	});
}

export default Component;

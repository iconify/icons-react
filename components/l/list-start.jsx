import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xickq4bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xickq4bta"/>`,
		"fallback": "hugeicons:list-start",
	});
}

export default Component;

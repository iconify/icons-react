import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3pu9ei_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3pu9ei_k"/>`,
		"fallback": "reicon:plane3",
	});
}

export default Component;

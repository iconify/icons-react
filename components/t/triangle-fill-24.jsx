import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz74pvtjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz74pvtjo"/>`,
		"fallback": "octicon:triangle-fill-24",
	});
}

export default Component;

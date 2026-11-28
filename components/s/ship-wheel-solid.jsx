import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzckph18p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzckph18p"/>`,
		"fallback": "iconaut:ship-wheel-solid",
	});
}

export default Component;

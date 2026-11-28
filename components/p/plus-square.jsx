import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae3o_2bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae3o_2bsd"/>`,
		"fallback": "noviair:plus-square",
	});
}

export default Component;

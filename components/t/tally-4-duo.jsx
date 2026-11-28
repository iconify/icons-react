import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o99x5v3qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o99x5v3qe"/>`,
		"fallback": "iconaut:tally-4-duo",
	});
}

export default Component;

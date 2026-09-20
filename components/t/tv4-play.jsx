import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6gnq9bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6gnq9bql"/>`,
		"fallback": "thesvg:tv4-play",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zahzeybal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zahzeybal"/>`,
		"fallback": "iconaut:tally-4-duotone",
	});
}

export default Component;

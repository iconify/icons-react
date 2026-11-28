import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isg9b6-va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isg9b6-va primary"/>`,
		"fallback": "iconaut:trapezoid-duotone",
	});
}

export default Component;

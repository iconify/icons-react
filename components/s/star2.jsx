import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8sym0b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8sym0b8o"/>`,
		"fallback": "reicon:star2",
	});
}

export default Component;

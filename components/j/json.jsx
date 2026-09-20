import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utw18ybor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utw18ybor"/>`,
		"fallback": "thesvg:json",
	});
}

export default Component;

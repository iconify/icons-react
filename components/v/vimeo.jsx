import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwhj3zbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwhj3zbks"/>`,
		"fallback": "thesvg:vimeo",
	});
}

export default Component;

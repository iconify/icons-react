import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y42_8l0eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y42_8l0eq"/>`,
		"fallback": "thesvg:trakt",
	});
}

export default Component;

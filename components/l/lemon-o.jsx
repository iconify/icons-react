import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfzas2b7a.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfzas2b7a"/>`,
		"fallback": "fa:lemon-o",
	});
}

export default Component;

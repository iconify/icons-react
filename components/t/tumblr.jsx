import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noxbw6vro.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noxbw6vro"/>`,
		"fallback": "topcoat:tumblr",
	});
}

export default Component;

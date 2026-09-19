import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvp9dbb3d.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvp9dbb3d"/>`,
		"fallback": "whh:retweet",
	});
}

export default Component;

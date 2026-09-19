import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh6whn39j.css';

const viewBox = {"width":770,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh6whn39j"/>`,
		"fallback": "whh:placeadd",
	});
}

export default Component;

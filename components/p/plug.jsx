import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6jyqbc7a.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6jyqbc7a"/>`,
		"fallback": "whh:plug",
	});
}

export default Component;

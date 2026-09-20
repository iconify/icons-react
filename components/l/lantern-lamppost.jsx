import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyw49evoz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyw49evoz"/>`,
		"fallback": "pinhead:lantern-lamppost",
	});
}

export default Component;

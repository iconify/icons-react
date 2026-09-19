import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rders717g.css';

const viewBox = {"width":1024,"height":641};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rders717g"/>`,
		"fallback": "whh:keyboarddelete",
	});
}

export default Component;

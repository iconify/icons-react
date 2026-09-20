import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6bmqdbjr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6bmqdbjr"/>`,
		"fallback": "pinhead:shopping-bag-with-heavy-six-point-asterisk",
	});
}

export default Component;

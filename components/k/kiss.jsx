import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqis67ecc.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqis67ecc"/>`,
		"fallback": "whh:kiss",
	});
}

export default Component;

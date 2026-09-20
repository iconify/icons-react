import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qudpbqb8k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qudpbqb8k"/>`,
		"fallback": "pinhead:roman-numeral-i-over-water",
	});
}

export default Component;

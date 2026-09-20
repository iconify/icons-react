import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c01havq3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c01havq3c"/>`,
		"fallback": "pinhead:two-minus-above-water",
	});
}

export default Component;

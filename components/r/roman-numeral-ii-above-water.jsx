import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x__7wzbko.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x__7wzbko"/>`,
		"fallback": "pinhead:roman-numeral-ii-above-water",
	});
}

export default Component;

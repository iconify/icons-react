import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i42eqgbwu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i42eqgbwu"/>`,
		"fallback": "pinhead:manufactured-home",
	});
}

export default Component;

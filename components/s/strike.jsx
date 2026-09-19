import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgnflcc0t.css';

const viewBox = {"width":700,"height":707};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgnflcc0t"/>`,
		"fallback": "ls:strike",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef7rbpz1f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef7rbpz1f"/>`,
		"fallback": "pinhead:utility-shutoff-with-cable",
	});
}

export default Component;

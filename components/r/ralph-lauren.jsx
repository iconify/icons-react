import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iihrjxbhb.css';

const viewBox = {"width":684,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iihrjxbhb"/>`,
		"fallback": "thesvg:ralph-lauren",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fui64t4ut.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fui64t4ut"/>`,
		"fallback": "picon:message",
	});
}

export default Component;

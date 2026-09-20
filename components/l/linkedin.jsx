import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-zmge8xi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-zmge8xi"/>`,
		"fallback": "thesvg-color:linkedin",
	});
}

export default Component;

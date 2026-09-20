import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah8t0enfb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah8t0enfb"/>`,
		"fallback": "pinhead:utility-valve",
	});
}

export default Component;

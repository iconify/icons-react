import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9c09xb7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9c09xb7g"/>`,
		"fallback": "entypo:stopwatch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joz7wcc-q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joz7wcc-q"/>`,
		"fallback": "garden:phone-call-end-fill-12",
	});
}

export default Component;

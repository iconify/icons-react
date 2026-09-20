import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9g7eqb2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9g7eqb2b"/>`,
		"fallback": "subway:previous-1",
	});
}

export default Component;

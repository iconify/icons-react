import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg62jd46k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg62jd46k"/>`,
		"fallback": "pinhead:vomiting-face",
	});
}

export default Component;

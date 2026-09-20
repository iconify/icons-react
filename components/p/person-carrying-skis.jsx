import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9p0gvn4s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9p0gvn4s"/>`,
		"fallback": "pinhead:person-carrying-skis",
	});
}

export default Component;

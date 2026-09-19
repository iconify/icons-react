import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im91p0gan.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im91p0gan"/>`,
		"fallback": "fa7-solid:moon",
	});
}

export default Component;

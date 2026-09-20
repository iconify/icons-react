import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3p10wblo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3p10wblo"/>`,
		"fallback": "uiw:stop",
	});
}

export default Component;

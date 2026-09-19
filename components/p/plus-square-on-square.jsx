import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldh_0wm7k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldh_0wm7k"/>`,
		"fallback": "f7:plus-square-on-square",
	});
}

export default Component;

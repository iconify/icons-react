import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aveyovb7m.css';

const viewBox = {"width":7,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aveyovb7m"/>`,
		"fallback": "formkit:right",
	});
}

export default Component;

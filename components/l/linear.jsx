import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug_839j4n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug_839j4n"/>`,
		"fallback": "thesvg-color:linear",
	});
}

export default Component;

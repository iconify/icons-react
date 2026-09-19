import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuq8d7a7n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuq8d7a7n"/>`,
		"fallback": "f7:square-righthalf-fill",
	});
}

export default Component;

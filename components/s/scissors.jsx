import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nza4dmobm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nza4dmobm"/>`,
		"fallback": "f7:scissors",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkvucmach.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkvucmach"/>`,
		"fallback": "f7:square-list",
	});
}

export default Component;

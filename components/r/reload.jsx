import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-1dadcot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-1dadcot"/>`,
		"fallback": "uiw:reload",
	});
}

export default Component;

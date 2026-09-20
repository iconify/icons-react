import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuui8ccfx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuui8ccfx"/>`,
		"fallback": "ooui:search-regular-expression",
	});
}

export default Component;

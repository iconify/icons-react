import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm0l__b7c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm0l__b7c"/>`,
		"fallback": "oi:italic",
	});
}

export default Component;

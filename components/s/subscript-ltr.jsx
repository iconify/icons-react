import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcnwxeb0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcnwxeb0d"/>`,
		"fallback": "ooui:subscript-ltr",
	});
}

export default Component;

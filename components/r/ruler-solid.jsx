import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvnte8biv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvnte8biv"/>`,
		"fallback": "la:ruler-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydchm0del.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydchm0del"/>`,
		"fallback": "la:pause-circle-solid",
	});
}

export default Component;

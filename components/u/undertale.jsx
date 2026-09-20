import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adim36bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adim36bfp"/>`,
		"fallback": "thesvg-color:undertale",
	});
}

export default Component;

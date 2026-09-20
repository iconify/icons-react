import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpozg-01u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpozg-01u"/>`,
		"fallback": "la:sad-cry-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l532xub4u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l532xub4u"/>`,
		"fallback": "picon:straighten",
	});
}

export default Component;

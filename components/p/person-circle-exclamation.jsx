import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqxbvhbbc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqxbvhbbc"/>`,
		"fallback": "fa6-solid:person-circle-exclamation",
	});
}

export default Component;

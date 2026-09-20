import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn4a4d53k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn4a4d53k"/>`,
		"fallback": "oi:tag",
	});
}

export default Component;

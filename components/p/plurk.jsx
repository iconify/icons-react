import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izwngpo4z.css';
import '../../css/w/w8fd4ubay.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izwngpo4z"/><path class="w8fd4ubay"/>`,
		"fallback": "el:plurk",
	});
}

export default Component;

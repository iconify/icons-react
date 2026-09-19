import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2jrpnjac.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2jrpnjac"/>`,
		"fallback": "fa6-brands:pixiv",
	});
}

export default Component;

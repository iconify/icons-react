import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylobwvhsp.css';

const viewBox = {"width":1728,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1728 0) scale(-1 1)"><path class="ylobwvhsp"/></g>`,
		"fallback": "fa:long-arrow-right",
	});
}

export default Component;

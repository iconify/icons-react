import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st6matk8b.css';

const viewBox = {"width":768,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st6matk8b"/>`,
		"fallback": "fa:long-arrow-up",
	});
}

export default Component;

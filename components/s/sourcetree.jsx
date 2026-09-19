import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hctv6-d5y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hctv6-d5y"/>`,
		"fallback": "fa-brands:sourcetree",
	});
}

export default Component;

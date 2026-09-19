import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el_-m5xbq.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el_-m5xbq"/>`,
		"fallback": "fa6-brands:servicestack",
	});
}

export default Component;

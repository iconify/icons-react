import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yujzi7b_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yujzi7b_c"/>`,
		"fallback": "ion:md-link",
	});
}

export default Component;

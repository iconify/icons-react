import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz07ytgpd.css';

const viewBox = {"width":35,"height":35};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz07ytgpd"/>`,
		"fallback": "thesvg:oddinpay",
	});
}

export default Component;

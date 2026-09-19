import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj3z_faaw.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj3z_faaw"/>`,
		"fallback": "fa6-brands:megaport",
	});
}

export default Component;

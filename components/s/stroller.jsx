import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn0hxm-rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn0hxm-rp"/>`,
		"fallback": "noviair-light:stroller",
	});
}

export default Component;

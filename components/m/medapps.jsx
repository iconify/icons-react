import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_3gsznsu.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_3gsznsu"/>`,
		"fallback": "fa-brands:medapps",
	});
}

export default Component;

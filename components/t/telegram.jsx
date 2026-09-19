import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dunl5u65t.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dunl5u65t"/>`,
		"fallback": "fa6-brands:telegram",
	});
}

export default Component;

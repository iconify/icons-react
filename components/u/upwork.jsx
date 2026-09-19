import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnr3bz6_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnr3bz6_p"/>`,
		"fallback": "cib:upwork",
	});
}

export default Component;

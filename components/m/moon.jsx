import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjgy8sb3k.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjgy8sb3k"/>`,
		"fallback": "fa6-regular:moon",
	});
}

export default Component;

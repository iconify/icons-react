import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms7rf3bcm.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms7rf3bcm"/>`,
		"fallback": "fa6-solid:shuttle-space",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viq1-by_c.css';
import '../../css/n/nskm8xyiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viq1-by_c"/><path class="nskm8xyiy"/>`,
		"fallback": "ion:trophy-outline",
	});
}

export default Component;

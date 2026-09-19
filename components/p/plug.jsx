import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp56aqbon.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp56aqbon"/>`,
		"fallback": "fa-solid:plug",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsjk3zbke.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsjk3zbke"/>`,
		"fallback": "ooui:level-one-ltr",
	});
}

export default Component;

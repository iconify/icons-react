import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q51zqjkxx.css';

const viewBox = {"width":14,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q51zqjkxx"/>`,
		"fallback": "jam:ltr",
	});
}

export default Component;

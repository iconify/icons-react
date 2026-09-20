import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygz7wxvlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygz7wxvlo"/>`,
		"fallback": "simple-icons:mixpanel",
	});
}

export default Component;

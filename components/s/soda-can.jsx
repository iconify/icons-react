import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd9sr7hhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd9sr7hhe"/>`,
		"fallback": "noviair-light:soda-can",
	});
}

export default Component;

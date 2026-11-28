import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ve-3bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ve-3bfr"/>`,
		"fallback": "noviair-light:mushroom-alert",
	});
}

export default Component;

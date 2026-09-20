import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beni0rbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beni0rbag"/>`,
		"fallback": "solar:pen-linear",
	});
}

export default Component;

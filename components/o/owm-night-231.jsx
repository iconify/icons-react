import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxgcv6b3c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxgcv6b3c"/>`,
		"fallback": "wi:owm-night-231",
	});
}

export default Component;

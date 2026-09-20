import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2c1qrbxz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2c1qrbxz"/>`,
		"fallback": "wi:owm-night-906",
	});
}

export default Component;

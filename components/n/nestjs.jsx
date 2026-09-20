import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj4pe0big.css';

const viewBox = {"width":264.6,"height":255.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj4pe0big"/>`,
		"fallback": "thesvg-color:nestjs",
	});
}

export default Component;

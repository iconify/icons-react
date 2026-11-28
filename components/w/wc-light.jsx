import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u52k2yfwh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u52k2yfwh"/>`,
		"fallback": "pullo:wc-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwww74b4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwww74b4j"/>`,
		"fallback": "zondicons:timer",
	});
}

export default Component;

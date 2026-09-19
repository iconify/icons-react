import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqibk0bjt.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqibk0bjt"/>`,
		"fallback": "vs:kakao",
	});
}

export default Component;

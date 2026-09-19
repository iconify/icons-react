import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht-s7mkzr.css';

const viewBox = {"width":1792,"height":1632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht-s7mkzr"/>`,
		"fallback": "vs:naver",
	});
}

export default Component;

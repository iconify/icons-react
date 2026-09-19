import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc-276b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc-276b-q"/>`,
		"fallback": "hugeicons:layers-plus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-6io26x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-6io26x"/>`,
		"fallback": "game-icons:rank-1",
	});
}

export default Component;

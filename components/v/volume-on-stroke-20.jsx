import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyz7sxb6l.css';
import '../../css/z/zhwfo4bgb.css';
import '../../css/n/ngnbw93bi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyz7sxb6l"/><path class="zhwfo4bgb"/><path class="ngnbw93bi"/>`,
		"fallback": "garden:volume-on-stroke-20",
	});
}

export default Component;

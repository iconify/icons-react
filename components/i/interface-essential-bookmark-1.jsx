import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp0y3rb0u.css';
import '../../css/z/zxw2msv7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp0y3rb0u"/><path class="zxw2msv7q"/>`,
		"fallback": "streamline-pixel:interface-essential-bookmark-1",
	});
}

export default Component;

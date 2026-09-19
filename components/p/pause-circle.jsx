import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/x/xqmpzbbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><path class="xqmpzbbse"/>`,
		"fallback": "bx:pause-circle",
	});
}

export default Component;

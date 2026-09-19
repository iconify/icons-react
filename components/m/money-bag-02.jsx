import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i-e5xqbyx.css';
import '../../css/m/mpznc0bgx.css';
import '../../css/w/w8--g4f7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="i-e5xqbyx"/><path class="mpznc0bgx"/><path class="w8--g4f7u"/></g>`,
		"fallback": "hugeicons:money-bag-02",
	});
}

export default Component;

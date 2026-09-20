import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txd5hwbwg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txd5hwbwg"/>`,
		"fallback": "streamline-flex:tag-alt",
	});
}

export default Component;

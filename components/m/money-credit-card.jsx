import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg778vblv.css';
import '../../css/p/pbnebbk0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg778vblv"/><path clip-rule="evenodd" class="pbnebbk0m"/>`,
		"fallback": "streamline-block:money-credit-card",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwvlvvbmr.css';
import '../../css/l/l66nyjbec.css';
import '../../css/f/fw-va7bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwvlvvbmr"/><path class="l66nyjbec"/><path class="fw-va7bcc"/>`,
		"fallback": "token:mana",
	});
}

export default Component;

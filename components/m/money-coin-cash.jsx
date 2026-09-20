import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cke6vwbrd.css';
import '../../css/k/kbp6v8_4a.css';
import '../../css/w/w3q6r8btx.css';
import '../../css/i/i8t5fzqma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cke6vwbrd"/><path class="kbp6v8_4a"/><path class="w3q6r8btx"/><path class="i8t5fzqma"/>`,
		"fallback": "streamline-freehand:money-coin-cash",
	});
}

export default Component;

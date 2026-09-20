import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/t/t3nax9bpl.css';
import '../../css/f/fonqbuyut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path class="t3nax9bpl"/><path class="fonqbuyut"/></g>`,
		"fallback": "streamline-plump-color:mail-send-reply-all-flat",
	});
}

export default Component;

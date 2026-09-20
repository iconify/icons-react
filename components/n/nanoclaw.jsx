import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn77a-bgw.css';
import '../../css/i/ipbi0zqsr.css';
import '../../css/f/fgp57luau.css';
import '../../css/h/hbufu4b4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn77a-bgw"/><path class="ipbi0zqsr"/><path class="fgp57luau"/><path class="hbufu4b4q"/>`,
		"fallback": "selfhst:nanoclaw",
	});
}

export default Component;

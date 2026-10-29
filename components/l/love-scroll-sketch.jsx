import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o_kozsbwc.css';
import '../../css/o/olg4m4bgm.css';
import '../../css/n/n9fzp5b5o.css';
import '../../css/r/rp9c5jbdr.css';
import '../../css/x/xq8rrbbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o_kozsbwc wm-a"/><path class="olg4m4bgm wm-s"/><path class="n9fzp5b5o wm-k"/><path class="rp9c5jbdr wm-a"/><path class="wm-s xq8rrbbow"/></g>`,
		"fallback": "withicons:love-scroll-sketch",
	});
}

export default Component;

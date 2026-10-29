import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3jg7nbdr.css';
import '../../css/v/vhq7hmbdn.css';
import '../../css/q/qsg1dubrj.css';
import '../../css/n/n8ihr8b9o.css';
import '../../css/c/c8st50gyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o3jg7nbdr wm-k"/><path class="vhq7hmbdn wm-s"/><path class="qsg1dubrj wm-shadow"/><path class="n8ihr8b9o wm-k"/><path class="c8st50gyo wm-s"/></g>`,
		"fallback": "withicons:phone-outgoing-engrave",
	});
}

export default Component;

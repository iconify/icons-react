import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n3eggmokr.css';
import '../../css/u/ubh6k1bby.css';
import '../../css/e/eyza0v3jg.css';
import '../../css/a/aedlnnets.css';
import '../../css/g/g0jhk334h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n3eggmokr wm-k"/><path class="ubh6k1bby wm-a"/><path class="eyza0v3jg wm-shadow"/><path class="aedlnnets wm-k"/><path class="g0jhk334h wm-a"/></g>`,
		"fallback": "withicons:soup-engrave",
	});
}

export default Component;

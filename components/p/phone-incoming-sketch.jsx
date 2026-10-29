import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jh6lxrb9u.css';
import '../../css/p/p8v2fyboy.css';
import '../../css/t/tzpvtdwuf.css';
import '../../css/x/xdetkr8ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jh6lxrb9u"/><path class="p8v2fyboy wm-s"/><path class="tzpvtdwuf wm-k"/><path class="wm-s xdetkr8ld"/></g>`,
		"fallback": "withicons:phone-incoming-sketch",
	});
}

export default Component;

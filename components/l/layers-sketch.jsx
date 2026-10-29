import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wououk7rn.css';
import '../../css/x/xg3rfmbqu.css';
import '../../css/t/t1n7njqvt.css';
import '../../css/w/w2jcjnb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wououk7rn"/><path class="wm-a xg3rfmbqu"/><path class="t1n7njqvt wm-k"/><path class="w2jcjnb0u wm-a"/></g>`,
		"fallback": "withicons:layers-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h71ljzv1c.css';
import '../../css/n/nh91u75kb.css';
import '../../css/e/ec-z1vbok.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/j/jjoj11miz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h71ljzv1c wm-k"/><path class="nh91u75kb wm-a"/><path class="ec-z1vbok wm-shadow"/><path class="ocnol1b_l wm-k"/><path class="jjoj11miz wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-plus-engrave",
	});
}

export default Component;

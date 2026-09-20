import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx6h-ubow.css';
import '../../css/s/sx13j5bfm.css';
import '../../css/k/k5kkv_n6l.css';
import '../../css/u/ula6avb3k.css';
import '../../css/v/vus1pgyxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx6h-ubow"/><path class="sx13j5bfm"/><path class="k5kkv_n6l"/><path class="ula6avb3k"/><path class="vus1pgyxj"/>`,
		"fallback": "selfhst:specifically-clementines",
	});
}

export default Component;

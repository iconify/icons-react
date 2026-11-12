import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx6h-ubow.css';
import '../../css/s/sx13j5bfm.css';
import '../../css/i/itudopb2x.css';
import '../../css/u/ula6avb3k.css';
import '../../css/q/q_nf5abky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx6h-ubow"/><path class="sx13j5bfm"/><path class="itudopb2x"/><path class="ula6avb3k"/><path class="q_nf5abky"/>`,
		"fallback": "selfhst:specifically-clementines",
	});
}

export default Component;

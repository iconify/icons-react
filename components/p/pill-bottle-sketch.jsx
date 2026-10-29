import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cn9jjnbdz.css';
import '../../css/u/upw9jgwpi.css';
import '../../css/b/b80h1i44n.css';
import '../../css/z/z7llafbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cn9jjnbdz"/><path class="upw9jgwpi wm-a"/><path class="b80h1i44n wm-k"/><path class="wm-a z7llafbnf"/></g>`,
		"fallback": "withicons:pill-bottle-sketch",
	});
}

export default Component;

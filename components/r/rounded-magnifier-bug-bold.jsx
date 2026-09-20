import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqw2fiswd.css';
import '../../css/b/bk_m9d1nh.css';
import '../../css/r/rf1nadbwu.css';
import '../../css/f/fcnkvi4op.css';
import '../../css/w/wc2kzlbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hqw2fiswd"/><path clip-rule="evenodd" class="bk_m9d1nh"/><path class="rf1nadbwu"/><path class="fcnkvi4op"/><path class="wc2kzlbjd"/></g>`,
		"fallback": "solar:rounded-magnifier-bug-bold",
	});
}

export default Component;

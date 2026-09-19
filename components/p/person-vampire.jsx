import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qi45swhau.css';
import '../../css/h/hol78yygl.css';
import '../../css/h/hpmok1bvn.css';
import '../../css/n/ncb32vbdb.css';
import '../../css/y/yq2xhabuf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qi45swhau"/><path class="hol78yygl"/><path clip-rule="evenodd" class="hpmok1bvn"/><path class="ncb32vbdb"/><path class="yq2xhabuf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-vampire",
	});
}

export default Component;

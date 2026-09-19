import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tvl0obccn.css';
import '../../css/x/xiuiabbcc.css';
import '../../css/o/ofo04lg3k.css';
import '../../css/x/xkpy2fb9u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tvl0obccn"/><path class="xiuiabbcc"/><path clip-rule="evenodd" class="ofo04lg3k"/><path class="xkpy2fb9u"/></g>`,
		"fallback": "pepicons:train",
	});
}

export default Component;

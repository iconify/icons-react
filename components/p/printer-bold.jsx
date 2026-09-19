import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt2j16bug.css';
import '../../css/l/lc_o89b1g.css';
import '../../css/b/buyzzpuhk.css';
import '../../css/n/n1-jwdbbk.css';
import '../../css/y/yax8cqbao.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qt2j16bug"/><path class="lc_o89b1g"/><path class="buyzzpuhk"/><rect class="n1-jwdbbk"/><path class="yax8cqbao"/></g>`,
		"fallback": "glyphs:printer-bold",
	});
}

export default Component;

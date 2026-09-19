import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r92jf7bnj.css';
import '../../css/l/lq-c69bty.css';
import '../../css/p/p_af5cb9o.css';
import '../../css/g/g378efbht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r92jf7bnj"/><path class="lq-c69bty"/><path class="p_af5cb9o"/><path class="g378efbht"/></g>`,
		"fallback": "glyphs-poly:users-1",
	});
}

export default Component;

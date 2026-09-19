import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqahkkbse.css';
import '../../css/z/z3hu4kf3j.css';
import '../../css/e/erw_xjvgp.css';
import '../../css/f/fzz9ru6ak.css';
import '../../css/v/vqmo9wbma.css';
import '../../css/b/bci0-ui2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqahkkbse"/><path class="z3hu4kf3j"/><path clip-rule="evenodd" class="erw_xjvgp"/><path class="fzz9ru6ak"/><path class="vqmo9wbma"/><path clip-rule="evenodd" class="bci0-ui2v"/></g>`,
		"fallback": "glyphs:signal-outline",
	});
}

export default Component;

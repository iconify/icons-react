import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqahkkbse.css';
import '../../css/z/z3hu4kf3j.css';
import '../../css/x/xxr0gzb1n.css';
import '../../css/f/fzz9ru6ak.css';
import '../../css/v/vqmo9wbma.css';
import '../../css/h/h7obcwbxd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqahkkbse"/><path class="z3hu4kf3j"/><path clip-rule="evenodd" class="xxr0gzb1n"/><path class="fzz9ru6ak"/><path class="vqmo9wbma"/><path clip-rule="evenodd" class="h7obcwbxd"/></g>`,
		"fallback": "glyphs:stream-outline",
	});
}

export default Component;

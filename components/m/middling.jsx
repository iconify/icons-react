import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjysacrn.css';
import '../../css/m/mcrk-8rcw.css';
import '../../css/z/zr763ccpc.css';
import '../../css/z/zeqjldbtn.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjysacrn"/><circle class="mcrk-8rcw"/><circle class="zr763ccpc"/><path class="zeqjldbtn"/>`,
		"fallback": "iwwa:middling",
	});
}

export default Component;

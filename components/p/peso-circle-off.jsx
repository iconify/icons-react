import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jop22g4gn.css';
import '../../css/i/iq0obpnfm.css';
import '../../css/o/o-wo7mzmv.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jop22g4gn"/><path clip-rule="evenodd" class="iq0obpnfm"/><path clip-rule="evenodd" class="o-wo7mzmv"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:peso-circle-off",
	});
}

export default Component;

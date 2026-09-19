import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0evmke9w.css';
import '../../css/z/zgr3sybgc.css';
import '../../css/s/s9djyg5qq.css';
import '../../css/a/atbxxcbwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0evmke9w"/><path class="zgr3sybgc"/><path clip-rule="evenodd" class="s9djyg5qq"/><path clip-rule="evenodd" class="atbxxcbwg"/></g>`,
		"fallback": "icon-park:sofa-two",
	});
}

export default Component;

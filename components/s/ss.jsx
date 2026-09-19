import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/h/h2a6rrzea.css';
import '../../css/p/poumkgmqu.css';
import '../../css/b/b6zn_7b0w.css';
import '../../css/f/f6a7v1_xc.css';
import '../../css/f/f4vh8tbrd.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="h2a6rrzea"/><path clip-rule="evenodd" class="poumkgmqu"/><path class="b6zn_7b0w"/><path clip-rule="evenodd" class="f6a7v1_xc"/><path clip-rule="evenodd" class="f4vh8tbrd"/></g>`,
		"fallback": "flagpack:ss",
	});
}

export default Component;

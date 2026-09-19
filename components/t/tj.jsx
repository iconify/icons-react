import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/c/c2vcrqhfb.css';
import '../../css/x/xpbddjbvs.css';
import '../../css/n/nwj67uefn.css';
import '../../css/f/f6exzvbls.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umbnhhb9z"/><path class="c2vcrqhfb"/><path class="xpbddjbvs"/><path class="nwj67uefn"/><path class="f6exzvbls"/></g>`,
		"fallback": "flagpack:tj",
	});
}

export default Component;

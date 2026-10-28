import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9p-qb1b.css';
import '../../css/f/f3km4hxoo.css';
import '../../css/z/z-2k7zbqa.css';
import '../../css/y/y3vpmtb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vf9p-qb1b"/><circle class="f3km4hxoo"/><path class="z-2k7zbqa"/><path class="y3vpmtb_e"/></g>`,
		"fallback": "andrsrxn:walk",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp16bptoo.css';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/x/xnzk_khna.css';
import '../../css/r/r8actjfja.css';
import '../../css/d/da_b2flsj.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGrhc1Jeoq" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="rp16bptoo"/></mask><g clip-rule="evenodd" mask="url(#SVGrhc1Jeoq)" class="bi12bsetm"><path class="umbnhhb9z"/><path class="xnzk_khna"/><path class="r8actjfja"/><path class="da_b2flsj"/></g>`,
		"fallback": "flagpack:ps",
	});
}

export default Component;

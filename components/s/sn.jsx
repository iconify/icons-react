import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyr97l9zo.css';
import '../../css/f/f9cat0b0r.css';
import '../../css/j/j0uptwbwv.css';
import '../../css/j/j-4h9gb2n.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyr97l9zo"/><path class="f9cat0b0r"/><path class="j0uptwbwv"/><path class="j-4h9gb2n"/></g>`,
		"fallback": "flagpack:sn",
	});
}

export default Component;

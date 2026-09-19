import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z64f1kbqd.css';
import '../../css/d/dysgjbboo.css';
import '../../css/c/c_frfebem.css';
import '../../css/v/vvkquubga.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="z64f1kbqd"/><path class="dysgjbboo"/><path class="c_frfebem"/><ellipse class="vvkquubga"/></g>`,
		"fallback": "si-glyph:tank",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2v23kwih.css';
import '../../css/t/t2-f2ebnu.css';
import '../../css/f/f9l91t2cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2v23kwih"/><path class="t2-f2ebnu"/><path class="f9l91t2cl"/></g>`,
		"fallback": "andrsrxn:mail-in",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/en_xgrb1u.css';
import '../../css/f/fns7ilq0e.css';
import '../../css/v/vabrm_bjl.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="en_xgrb1u"/><path class="fns7ilq0e"/><path class="vabrm_bjl"/></g>`,
		"fallback": "flagpack:mg",
	});
}

export default Component;

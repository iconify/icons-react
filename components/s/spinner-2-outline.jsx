import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/etl99zlgf.css';
import '../../css/t/t3b4e_ftd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="etl99zlgf"/><path class="t3b4e_ftd"/></g>`,
		"fallback": "glyphs:spinner-2-outline",
	});
}

export default Component;

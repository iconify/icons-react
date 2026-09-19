import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lgef4pbfe.css';
import '../../css/z/z5_ckxmul.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lgef4pbfe"/><path class="z5_ckxmul"/></g>`,
		"fallback": "glyphs-poly:squircle",
	});
}

export default Component;

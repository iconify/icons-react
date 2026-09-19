import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7mn_xgnv.css';
import '../../css/v/v2yyhhawr.css';
import '../../css/y/yjsg9j51b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="h7mn_xgnv"><path class="v2yyhhawr"/><path class="yjsg9j51b"/></g>`,
		"fallback": "glyphs:male-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yk_lkmb7k.css';
import '../../css/v/v6k-1zb2k.css';
import '../../css/s/sj6ssgzvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yk_lkmb7k"/><path class="v6k-1zb2k"/><path class="sj6ssgzvr"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-browser-css",
	});
}

export default Component;

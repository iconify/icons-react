import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o83hmlbdl.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v6ez2ob9b.css';
import '../../css/f/fc94kxbxf.css';
import '../../css/s/sbq4c8a0b.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="d2kvgvbvc"><path class="v6ez2ob9b"/><path class="fc94kxbxf"/><path class="sbq4c8a0b"/></g>`,
		"fallback": "flag:la-4x3",
	});
}

export default Component;

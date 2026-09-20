import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zafm_pb1a.css';
import '../../css/i/i0otw5b8v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zafm_pb1a"/><path class="i0otw5b8v"/></g>`,
		"fallback": "jam:stumbleupon",
	});
}

export default Component;

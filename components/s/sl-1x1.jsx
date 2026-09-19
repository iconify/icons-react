import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8oyks3jb.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qh8yb7blt.css';
import '../../css/s/shx5uobcb.css';
import '../../css/h/hlycavu4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGFHIvTcmC"><rect class="a8oyks3jb"/></clipPath></defs><g clip-path="url(#SVGFHIvTcmC)" transform="scale(1.33333 1)" class="d2kvgvbvc"><path class="qh8yb7blt"/><path class="shx5uobcb"/><path class="hlycavu4p"/></g>`,
		"fallback": "flag:sl-1x1",
	});
}

export default Component;

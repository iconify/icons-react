import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fumtpyb2y.css';
import '../../css/q/q0nsod9nw.css';
import '../../css/b/bvd_dyb2w.css';

const viewBox = {"width":630,"height":630,"left":200,"top":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g paint-order="stroke"><path class="fumtpyb2y"/><path class="q0nsod9nw"/><path class="bvd_dyb2w"/></g>`,
		"fallback": "thesvg-color:onedev",
	});
}

export default Component;

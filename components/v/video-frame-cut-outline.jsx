import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a76nmjwqa.css';
import '../../css/y/ywtvxyb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a76nmjwqa"/><path class="ywtvxyb_i"/></g>`,
		"fallback": "solar:video-frame-cut-outline",
	});
}

export default Component;

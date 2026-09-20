import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nmg98gbkl.css';
import '../../css/l/l2vpsbbcf.css';
import '../../css/y/yas3t76qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nmg98gbkl"/><path class="l2vpsbbcf"/><path class="yas3t76qm"/></g>`,
		"fallback": "streamline-freehand:security-it-service",
	});
}

export default Component;

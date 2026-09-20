import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqe6yk_gz.css';
import '../../css/e/eqjvh1bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aqe6yk_gz"/><path class="eqjvh1bsm"/></g>`,
		"fallback": "streamline-freehand:phone-off",
	});
}

export default Component;

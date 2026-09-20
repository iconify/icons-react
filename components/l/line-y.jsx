import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smwg9db5p.css';
import '../../css/l/ldo914jjc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smwg9db5p"/><path class="ldo914jjc"/></g>`,
		"fallback": "pepicons-print:line-y",
	});
}

export default Component;

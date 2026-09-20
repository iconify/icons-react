import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l28f2kn4r.css';
import '../../css/i/i86kzcqeh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l28f2kn4r"/><path class="i86kzcqeh"/></g>`,
		"fallback": "pepicons-pencil:planet-ring",
	});
}

export default Component;

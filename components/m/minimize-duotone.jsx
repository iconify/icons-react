import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k72qnwksp.css';
import '../../css/v/vd2rhjb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k72qnwksp"/><path class="vd2rhjb3n"/></g>`,
		"fallback": "reicon:minimize-duotone",
	});
}

export default Component;

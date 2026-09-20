import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y7hblkbjs.css';
import '../../css/w/w4nyhcboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y7hblkbjs"/><path class="w4nyhcboh"/></g>`,
		"fallback": "reicon:shield-lock2",
	});
}

export default Component;

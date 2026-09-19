import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwdj50gvt.css';
import '../../css/c/ch6_fcbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwdj50gvt"/><path class="ch6_fcbjy"/>`,
		"fallback": "bx:location-plus",
	});
}

export default Component;

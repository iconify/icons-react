import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p31me2bwr.css';
import '../../css/g/gq9g_nbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p31me2bwr"/><path class="gq9g_nbqu"/></g>`,
		"fallback": "andrsrxn:repeat",
	});
}

export default Component;

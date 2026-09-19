import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bqhzbybbo.css';
import '../../css/w/waov-pqex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bqhzbybbo"/><path class="waov-pqex"/></g>`,
		"fallback": "hugeicons:messenger",
	});
}

export default Component;

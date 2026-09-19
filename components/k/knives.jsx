import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/n6v-of2ng.css';
import '../../css/g/gulo6pbni.css';
import '../../css/i/il53i0xwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="n6v-of2ng"/><path class="gulo6pbni"/><path class="il53i0xwp"/></g>`,
		"fallback": "hugeicons:knives",
	});
}

export default Component;

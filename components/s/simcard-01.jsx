import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8bf_mbcx.css';
import '../../css/h/h6pfvubgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z8bf_mbcx"/><path class="h6pfvubgz"/></g>`,
		"fallback": "hugeicons:simcard-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nar1qcwnr.css';
import '../../css/y/yc8u54bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nar1qcwnr"/><path class="yc8u54bet"/></g>`,
		"fallback": "hugeicons:medicine-bottle-02",
	});
}

export default Component;

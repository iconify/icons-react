import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/klpp_qbut.css';
import '../../css/n/n4c-gjbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="klpp_qbut"/><path class="n4c-gjbqo"/></g>`,
		"fallback": "hugeicons:layout-02",
	});
}

export default Component;

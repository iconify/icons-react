import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktc-_ac_k.css';
import '../../css/p/pasu78bxq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktc-_ac_k"/><path class="pasu78bxq"/>`,
		"fallback": "lineicons:power-switch",
	});
}

export default Component;

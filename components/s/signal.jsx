import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-vdk0s_v.css';
import '../../css/z/z0v-de56k.css';
import '../../css/h/hxkc6pbym.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-vdk0s_v"/><path class="z0v-de56k"/><path class="hxkc6pbym"/>`,
		"fallback": "lineicons:signal",
	});
}

export default Component;

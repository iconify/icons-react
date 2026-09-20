import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgjdvv67z.css';
import '../../css/t/ttm_7fxim.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgjdvv67z"/><path class="ttm_7fxim"/>`,
		"fallback": "lineicons:target-customer",
	});
}

export default Component;

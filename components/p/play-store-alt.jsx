import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo2-g_b4a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oo2-g_b4a"/>`,
		"fallback": "lineicons:play-store-alt",
	});
}

export default Component;

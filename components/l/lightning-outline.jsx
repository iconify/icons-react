import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii24kzbxm.css';
import '../../css/x/xejlx-96v.css';
import '../../css/z/zly6tablv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii24kzbxm"/><path class="xejlx-96v"/><path clip-rule="evenodd" class="zly6tablv"/>`,
		"fallback": "solar:lightning-outline",
	});
}

export default Component;

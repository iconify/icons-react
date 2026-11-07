import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuo7dyblv.css';
import '../../css/l/l8542ybkm.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yuo7dyblv"/><path class="l8542ybkm"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-cross-rounded-bold",
	});
}

export default Component;

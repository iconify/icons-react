import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyfuw7bce.css';
import '../../css/i/iu0eltnal.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyfuw7bce"/><path class="iu0eltnal"/>`,
		"fallback": "lineicons:rain",
	});
}

export default Component;

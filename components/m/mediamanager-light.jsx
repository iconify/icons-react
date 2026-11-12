import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkff-3cxp.css';
import '../../css/z/z6tzkqpon.css';
import '../../css/v/vcnt0ibmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkff-3cxp"/><path class="z6tzkqpon"/><path class="vcnt0ibmw"/>`,
		"fallback": "selfhst:mediamanager-light",
	});
}

export default Component;

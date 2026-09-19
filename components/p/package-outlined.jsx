import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxbvi_4ka.css';
import '../../css/z/z2pque0vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxbvi_4ka"/><path class="z2pque0vh"/>`,
		"fallback": "eos-icons:package-outlined",
	});
}

export default Component;

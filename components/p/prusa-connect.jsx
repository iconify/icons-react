import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7dfh_bxr.css';
import '../../css/d/doa6wmbxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7dfh_bxr"/><path class="doa6wmbxk"/>`,
		"fallback": "selfhst:prusa-connect",
	});
}

export default Component;

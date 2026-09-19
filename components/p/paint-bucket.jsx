import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ow9_bsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ow9_bsm"/>`,
		"fallback": "cil:paint-bucket",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0spu66xb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0spu66xb"/>`,
		"fallback": "cil:phone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3a2tccdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3a2tccdr"/>`,
		"fallback": "cil:line-weight",
	});
}

export default Component;

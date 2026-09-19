import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6q-f6bnh.css';
import '../../css/z/z7n81bcbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6q-f6bnh"/><path class="z7n81bcbw"/>`,
		"fallback": "cil:mood-bad",
	});
}

export default Component;

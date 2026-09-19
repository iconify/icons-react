import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgmh4nbed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgmh4nbed"/>`,
		"fallback": "cil:pencil",
	});
}

export default Component;

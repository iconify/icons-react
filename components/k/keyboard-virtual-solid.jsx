import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4brq-abm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4brq-abm"/>`,
		"fallback": "streamline:keyboard-virtual-solid",
	});
}

export default Component;

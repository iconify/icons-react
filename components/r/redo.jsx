import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm9egmo0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm9egmo0x"/>`,
		"fallback": "subway:redo",
	});
}

export default Component;

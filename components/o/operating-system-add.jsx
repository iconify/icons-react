import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk_05bafr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk_05bafr"/>`,
		"fallback": "ix:operating-system-add",
	});
}

export default Component;
